export const isUserLoggedIn = () => {
    const token = localStorage.getItem("accessToken")
    return !!token;
}