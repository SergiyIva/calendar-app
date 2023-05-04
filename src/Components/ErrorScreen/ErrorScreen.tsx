
type ErrorScreenProps = {
    error: string
}
export const ErrorScreen = ({error}: ErrorScreenProps) => {
    return(
        <h1>
            Error: {error}
        </h1>
    )
}