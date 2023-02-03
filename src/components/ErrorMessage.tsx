import Typography from "@mui/material/Typography"

type Props = {
    status: string,
}

export const ErrorMessage: React.FC<Props> = ({
    status
  }) => {
    function statusMessage(){
        switch (status) {
            case "400":
                return "Bad Request"
            case "401":
                return "Unauthorized"
            case "402":
                return "Payment Required"
            case "403":
                return "Forbidden"
            case "404":
                return "Not Found" 
            case "500":
                return "Internal Server Error"
            default:
                return "Network Error"
        }
    }
    return (
        <>
            <Typography variant="h2" component="h2" sx={{textAlign: 'center',fontSize: {xs: 28,sm: 32, md: 50}, mt: {xs: 1, md: 8}, display: {xs: 'block', md: 'block'}}}>
                Error: {status}
            </Typography>
            <Typography variant="h2" component="h2" sx={{textAlign: 'center',fontSize: {xs: 28,sm: 32, md: 50}, mt: {xs: 1, md: 8}, display: {xs: 'block', md: 'block'}}}>
                {statusMessage()}
            </Typography>
        </>
    )
  }

export {}




