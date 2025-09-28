import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
  const QueryClient = useQueryClient();
  const { mutate, error, isPending } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success("Booking deleted successfully");
      QueryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error("There was an error deleting the booking. Please try again.");
    },
  });

  return { mutate, error, isPending };
}
