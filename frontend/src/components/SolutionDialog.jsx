import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SolutionDialog({ open, onClose, solutionText }) {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(solutionText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={onClose}
            aria-describedby="solution-dialog-description"
            PaperProps={{
                sx: {
                    backgroundColor: "rgb(30, 29, 29)",
                    color: "#CCCCCC",
                    borderRadius: 2,
                    minWidth: 400,
                    
                },
            }}
        >
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                }}
            >
                Cube Solution
                <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
                    <IconButton
                        size="small"
                        onClick={handleCopy}
                        sx={{ color: "#FFFFFF" }}
                    >
                        <ContentCopyIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </DialogTitle>

            <DialogContent>
                <Box
                    sx={{
                        backgroundColor: "rgb(23, 23, 23)",
                        borderRadius: 1,
                        padding: 2,
                        fontFamily: "'Roboto Mono', monospace",
                        whiteSpace: "pre-wrap",
                        color: "#CCCCCC",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        userSelect: "text",
                    }}
                >
                    {solutionText}
                </Box>
            </DialogContent>

            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button
                    onClick={onClose}
                    sx={{
                        backgroundColor: "#0051BA",
                        color: "#FFFFFF",
                        textTransform: "none",
                        fontWeight: 500,
                        '&:hover': {
                            backgroundColor: "#003D8F",
                        },
                    }}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}
