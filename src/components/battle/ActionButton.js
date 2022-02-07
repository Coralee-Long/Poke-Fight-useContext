import Button from "@mui/material/Button";
const ActionButton = ({ handleActionClick, action }) => {

    return (
        <>
            <Button className="ButtonAction" variant="contained" onClick={handleActionClick}>{action.toUpperCase()}</Button>
        </>
    )
}
export default ActionButton;