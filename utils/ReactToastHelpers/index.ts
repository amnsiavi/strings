import { toast } from "react-toastify";

export function Success(message: string) {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
}

export function Error(message: string) {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
}
