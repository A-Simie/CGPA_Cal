import axios from "axios";
import toast from "react-hot-toast";

const apiUrl = "https://scrivta-backend.onrender.com/scrivta";

const Login = async (email, password, setLoading) => {
  const url = `${apiUrl}/login`;
  const data = {
    email,
    password,
  };

  console.log(data);
  try {
    const postsData = await axios.post(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return postsData;
  } catch (err) {
    console.log(err);
    setLoading(false);

    toast.error(
      `${err?.response?.data?.msg || "Error"}: ${
        err?.response?.data?.msg || err.message
      }`
    );
  }
};

// const VerifyEmail = async (id, orgID, email, setLoading) => {
//     const MySwal = withReactContent(Swal)

//     const url = `${apiUrl}/login/verifyEmail/${id}/${orgID}/${email}`

//     try {
//         const postsData = await axios.post(url, {
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json;charset=UTF-8'
//             }
//         })
//         return postsData
//     } catch (err) {
//         console.log(err)
//         setLoading(false)
//         MySwal.fire({
//             title: err?.response?.data?.status || 'Error',
//             icon: 'error',
//             text: err?.response?.data?.message || err.message
//         })
//     }
// }
// const Login = async (data, setLoading) => {
//     const MySwal = withReactContent(Swal)

//     const url = `${apiUrl}/login/doLogin`

//     console.log(data)
//     try {
//         const postsData = await axios.post(url, data, {
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json;charset=UTF-8'
//             }
//         })
//         return postsData
//     } catch (err) {
//         console.log(err)
//         setLoading(false)
//         MySwal.fire({
//             title: err?.response?.data?.status || 'Error',
//             icon: 'error',
//             text: err?.response?.data?.message || err.message
//         })
//     }
// }
// const InviteUser = async (data, setLoading) => {
//     const MySwal = withReactContent(Swal)

//     const url = `${apiUrl}/login/invite`

//     console.log(data)
//     try {
//         const postsData = await axios.post(url, data, {
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json;charset=UTF-8'
//             }
//         })
//         return postsData
//     } catch (err) {
//         console.log(err)
//         setLoading(false)
//         MySwal.fire({
//             title: err?.response?.data?.status || 'Error',
//             icon: 'error',
//             text: err?.response?.data?.message || err.message
//         })
//     }
// }

// const InitiateForgotPassword = async (data, setLoading) => {
//     const MySwal = withReactContent(Swal)

//     const url = `${apiUrl}/login/initiateForgotPassword`

//     console.log(data)
//     try {
//         const getData = await axios.get(url, {
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json;charset=UTF-8',
//                 email: data.email
//             }
//         })
//         return getData
//     } catch (err) {
//         console.log(err)
//         setLoading(false)
//         MySwal.fire({
//             title: err?.response?.data?.status || 'Error',
//             icon: 'error',
//             text: err?.response?.data?.message || err.message
//         })
//     }
// }

// const CompleteForgotPassword = async (data, setLoading) => {
//     const MySwal = withReactContent(Swal)

//     const url = `${apiUrl}/login/completeForgotPassword`

//     console.log(data)
//     try {
//         const postsData = await axios.post(url, data, {
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json;charset=UTF-8'
//             }
//         })
//         return postsData
//     } catch (err) {
//         console.log(err)
//         setLoading(false)
//         MySwal.fire({
//             title: err?.response?.data?.status || 'Error',
//             icon: 'error',
//             text: err?.response?.data?.message || err.message
//         })
//     }
// }

// const ChangePassword = async (data, setLoading) => {
//     const MySwal = withReactContent(Swal)

//     const url = `${apiUrl}/login/changePassword`

//     console.log(data)
//     try {
//         const postsData = await axios.post(url, data, {
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json;charset=UTF-8'
//             }
//         })
//         return postsData
//     } catch (err) {
//         console.log(err)
//         setLoading(false)
//         MySwal.fire({
//             title: err?.response?.data?.status || 'Error',
//             icon: 'error',
//             text: err?.response?.data?.message || err.message
//         })
//     }
// }

export { Login };
