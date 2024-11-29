import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 52,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        color: "#110d34",
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(24px)",
            color: "#110d34",
            "& + .MuiSwitch-track": {
                backgroundColor: "#e5e2ff",
                opacity: 1,
                border: 0,
                ...theme.applyStyles("dark", {
                    backgroundColor: "#2ECA45",
                }),
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color: theme.palette.grey[100],
            ...theme.applyStyles("dark", {
                color: theme.palette.grey[600],
            }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.7,
            ...theme.applyStyles("dark", {
                opacity: 0.3,
            }),
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22,
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: "#E9E9EA",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
        ...theme.applyStyles("dark", {
            backgroundColor: "#39393D",
        }),
    },
}));

interface CustomizedSwitchProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomizedSwitch({
    checked,
    onChange,
}: CustomizedSwitchProps) {
    return (
        <FormGroup>
            <FormControlLabel
                label=""
                control={
                    <IOSSwitch
                        sx={{ m: 1 }}
                        defaultChecked={checked}
                        onChange={(event) => onChange(event)}
                    />
                }
            />
        </FormGroup>
    );
}
