import axiosSecure from "@/Hooks/userAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function useAppointmentsData(page, filter) {
  
    
  const fetchData = async () => {
    const res = await axiosSecure.get(`/approved-appointments?page=${page}&filter=${filter}`);
    return res.data;
  };

  return useQuery({
    queryKey: ["appointments"],
    queryFn: () => fetchData(),
  });
}
