import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

type TCategory = {
  id: number;
  name: string;
  image: string;
  slug: string;
};

//fetch api với axios
const fetchCategories = async (): Promise<TCategory[]> => {
  const response = await axios.get(
    "https://api.escuelajs.co/api/v1/categories",
  );
  //Bắt buộc phải return về dữ liệu cần sử dụng
  return response.data;
};

//gọi api xoá category
const deleteCategory = async (id: number): Promise<boolean> => {
  const response = await axios.delete(
    `https://api.escuelajs.co/api/v1/categories/${id}`,
  );
  //Bắt buộc phải return về dữ liệu cần sử dụng
  return response.data;
};

const DeleteButton = ({ onHandleDelete }: { onHandleDelete: () => void }) => {
  return (
    <Button
      onClick={onHandleDelete}
      variant="destructive"
      className="cursor-pointer"
    >
      <Trash2 /> Delete
    </Button>
  );
};

const CategoriesAxiosReactQuery = () => {
  //Sử dụng react query để lấy danh sách categories
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  console.log("<<=== 🚀 data ===>>", data);

  const queryClient = useQueryClient();
  //----DELETE CATEGORIES ------//
  const mutationDelete = useMutation({
    mutationFn: deleteCategory,
    //khi xoá thành công
    onSuccess: () => {
      console.log("Xoá thành công");
      //Làm tươi lại danh sách
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      //Báo thành công
      toast.success("Xoá thành công!");
    },
    //Khi xoá thất bại
    onError: () => {
      console.log("Xoá thất bại");
      toast.error("Xoá thất bại");
    },
  });

  if (isLoading) {
    return <p>Loading ....</p>;
  }

  if (isError) {
    return <p>Có lỗi xảy ra: {error.message}</p>;
  }

  return (
    <div>
      <h2>Categories list</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((c) => {
              return (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.id}</TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.slug}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-x-2">
                      <DeleteButton
                        onHandleDelete={async () => {
                          mutationDelete.mutateAsync(c.id);
                        }}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoriesAxiosReactQuery;
