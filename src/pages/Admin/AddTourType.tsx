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
import { useGetTourTypesQuery } from "@/redux/features/Tour/tour.api";
import { Trash2 } from "lucide-react";

const AddTourType = () => {
  const { data } = useGetTourTypesQuery(undefined);

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
            {data?.map((item: { name: string }, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium w-full">
                  {item?.name}
                </TableCell>
                <TableCell className="font-medium text-right">
                  <Button>
                    <Trash2></Trash2>
                  </Button>
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
