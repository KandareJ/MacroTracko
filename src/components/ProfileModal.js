import React from "react";

import {
    Card,
    Modal,
    Slider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Stack,
    Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { modalsActions } from "../store/modals";
import { profileActions } from "../store/profile";

const ProfileModal = ({ open }) => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const [height, setHeight] = React.useState(profile.height);
    const [weight, setWeight] = React.useState(profile.weight);
    const [age, setAge] = React.useState(profile.age);
    const [gender, setGender] = React.useState(profile.gender);
    const [goal, setGoal] = React.useState(profile.goal);
    const [exerciseLevel, setExerciseLevel] = React.useState(profile.exerciseLevel);

    const handleClose = () => {
        dispatch({ type: modalsActions.CLOSE_PROFILE });
        setHeight(profile.height);
        setWeight(profile.weight);
        setAge(profile.age);
        setGender(profile.gender);
        setGoal(profile.goal);
        setExerciseLevel(profile.exerciseLevel);
    };

    const handleSave = () => {
        dispatch({ type: modalsActions.CLOSE_PROFILE});
        dispatch({
            type: profileActions.UPDATE_PROFILE,
            payload: {
                height,
                weight,
                age,
                gender,
                goal,
                exerciseLevel
            }
        });
    }

    return (
        <Modal open={open}>
            <Card style={styles.modal}>
                <Box style={{paddingLeft: 10, paddingRight: 10}}>
                <Typography variant="h4" style={{marginTop: 10}}>Profile</Typography>
                <Typography variant="subtitle">This profile is used to calculate the amount of macros you need in a day</Typography>
                <Accordion style={{marginTop: 20}}>
                    <AccordionSummary>
                            <Typography>Height: {`${Math.floor(height / 12)}'${height % 12}`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Slider
                            value={height}
                            onChange={(e) => {setHeight(e.target.value)}}
                            step={1}
                            min={60}
                            max={78}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                            <Typography>Weight: {weight} lbs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Slider
                            value={weight}
                            onChange={(e) => {setWeight(e.target.value)}}
                            step={1}
                            min={100}
                            max={250}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                            <Typography>Age: {age}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Slider
                            value={age}
                            onChange={(e) => {setAge(e.target.value)}}
                            step={1}
                            min={18}
                            max={60}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                            <Typography>Gender: {gender}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <RadioGroup value={gender} onChange={(e) => setGender(e.target.value)}>
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    </RadioGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                            <Typography>Goal: {goal}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <RadioGroup value={goal} onChange={(e) => setGoal(e.target.value)}>
                        <FormControlLabel value="Fat Loss" control={<Radio />} label="Fat Loss" />
                        <FormControlLabel value="Maintain" control={<Radio />} label="Maintain" />
                        <FormControlLabel value="Bulk" control={<Radio />} label="Bulk" />
                    </RadioGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                            <Typography>Exercise Level: {exerciseLevel}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <RadioGroup value={exerciseLevel} onChange={(e) => setExerciseLevel(e.target.value)}>
                        <FormControlLabel value="Sedentary" control={<Radio />} label="Sedentary" />
                        <FormControlLabel value="Lightly Active" control={<Radio />} label="Lightly Active" />
                        <FormControlLabel value="Moderately Active" control={<Radio />} label="Moderately Active" />
                        <FormControlLabel value="Very Active" control={<Radio />} label="Very Active" />
                        <FormControlLabel value="Extremely Active" control={<Radio />} label="Extremely Active" />
                    </RadioGroup>
                    </AccordionDetails>
                </Accordion>

                <Stack spacing={2} direction="row" justifyContent="center" style={{marginTop: 20}}>
                    <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleSave}>Save Changes</Button>
                </Stack>
                </Box>
            </Card>
        </Modal>
    )
};

export default ProfileModal;

const styles = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "80%",
        maxHeight: "80%",
        overflowY: "scroll",
        padding: 10
    }
};