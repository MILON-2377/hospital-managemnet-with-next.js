import axiosSecure from "@/Hooks/userAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function useApprovedAppointments(page, email, search) {
  
    
  const fetchData = async () => {
    const res = await axiosSecure.get(`/doctor-approved-appointments?page=${page}&email=${email}&search=${search}`);
    return res.data;
  };

  return useQuery({
    queryKey: ["appointments"],
    queryFn: () => fetchData(),
    enabled:!!email,
  });
}
