import axiosSecure from "@/Hooks/userAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function useAppointmentsData(page) {
  
    
  const fetchData = async () => {
    const res = await axiosSecure.get(`/approved-appointments?page=${page}`);
    return res.data;
  };

  return useQuery({
    queryKey: ["appointments"],
    queryFn: () => fetchData(),
  });
}
