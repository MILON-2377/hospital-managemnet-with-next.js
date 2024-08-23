import axiosSecure from "@/Hooks/userAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function useDoctorsData(page) {
  
    
  const fetchData = async () => {
    const res = await axiosSecure.get(`/doctors?page=${page}`);
    return res.data;
  };

  return useQuery({
    queryKey: ["doctors"],
    queryFn: () => fetchData(),
  });
}
