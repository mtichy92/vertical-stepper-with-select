import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Vyberte level 1",
    description: `Jedná se o Retenci, Pojistnou smlouvu, Pojistnou událost, Daně, nebo Storno?`
  },
  {
    label: "Vyberte primární systém",
    description: "APO, KDP, SYMPAC, KDP, ..."
  },
  {
    label: "Vyberte cílovou plochu",
    description: `Plocha v DA`
  }
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  {index === 0 && (
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={1}
                      label="level1"
                      onChange={() => {}}
                    >
                      <MenuItem value={1}>Pojistná smlouva</MenuItem>
                      <MenuItem value={2}>Pojistná událost</MenuItem>
                      <MenuItem value={3}>Retence</MenuItem>
                    </Select>
                  )}
                  {index === 1 && (
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={1}
                      label="level2"
                      onChange={() => {}}
                    >
                      <MenuItem value={1}>KDP</MenuItem>
                      <MenuItem value={2}>SYMPAC</MenuItem>
                      <MenuItem value={3}>APO</MenuItem>
                    </Select>
                  )}
                  {index === 2 && (
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={1}
                      label="level3"
                      onChange={() => {}}
                    >
                      <MenuItem value={1}>ZP-S-Dane</MenuItem>
                      <MenuItem value={2}>ZP-S-RSL</MenuItem>
                      <MenuItem value={3}>ZP-S-DNL</MenuItem>
                    </Select>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
