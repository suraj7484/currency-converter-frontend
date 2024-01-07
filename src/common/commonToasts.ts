import toast from 'react-hot-toast';

const commonToasts = {
  errorToast,
  successToast,
  successBottomToast,
  errorBottomToast,
};
export default commonToasts;

function errorToast(data: any) {
  toast.error(data, {
    duration: 3000,
    position: 'top-right',
    className: 'toast-div-address whitespace-break',
  });
}

function successToast(data: any) {
  toast.success(data, {
    duration: 2000,
    position: 'top-right',
    className: 'toast-div-address-success whitespace-break',
  });
}

function successBottomToast(data: any) {
  toast.success(data, {
    duration: 2000,
    position: 'bottom-left',
    className: 'toast-div-address-success whitespace-break',
  });
}
function errorBottomToast(data: any) {
  toast.error(data, {
    duration: 3000,
    position: 'bottom-left',
    className: 'toast-div-address whitespace-break',
  });
}
