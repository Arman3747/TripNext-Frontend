import DeleteConfirmation from "@/components/DeleteConfirmation";
import AddTourModal from "@/components/modules/Admin/TourType/AddTourModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetTourTypesQuery,
  useRemoveTourTypeMutation,
} from "@/redux/features/Tour/tour.api";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

const AddTourType = () => {
  const { data } = useGetTourTypesQuery(undefined);

  const [removeTourType] = useRemoveTourTypeMutation();

  const handleRemoveTourType = async (tourId: string) => {
    const toastId = toast.loading("Removing...");

    try {
      const res = await removeTourType(tourId).unwrap();
      if (res.success) {
        toast.success("Removed", { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  return (
    <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="flex justify-between my-8">
        <h1 className="text-2xl font-semibold">Tour Types</h1>
        {/* <Button>Add Tour Type</Button> */}
        <AddTourModal></AddTourModal>
      </div>
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">Name</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: { _id: string; name: string }, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium w-full">
                  {item?.name}
                </TableCell>
                <TableCell className="font-medium text-right">
                  <DeleteConfirmation
                    onConfirm={() => {
                      handleRemoveTourType(item._id);
                    }}
                  >
                    <Button>
                      <Trash2></Trash2>
                    </Button>
                  </DeleteConfirmation>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AddTourType;
