import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CustomCard from './MUICard';
import MUIForm from './Form';
import { StyledDiv } from './StyledComponents';
import MUIDialog from './MUIDialog';

const styles = {
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: '2em',
  borderRadius: '1em',
  border: '1px solid darkslategray',
  margin: '1em 0',
};
const StyledGrid = styled(Grid)(styles);

// layout cards in a grid
export default function BasicGrid() {
  // Outermost Grid is a container
  return (
    <>
      <MUIDialog text="First dialog"></MUIDialog>
      <Grid container>
        <MUIForm></MUIForm>
      </Grid>
      <StyledDiv>This is a style Div</StyledDiv>

      <StyledGrid container spacing={2} my={2}>
        {/* Inner Grids (columns) are items */}
        <Grid item xs={4}>
          {/* use 4/12 columns on xs screens up */}
          <CustomCard title="First Column">First column is wider</CustomCard>
        </Grid>
        <Grid item xs={2}>
          middle item
        </Grid>
        <Grid item xs={2}>
          middle item
        </Grid>
        <Grid item xs={4}>
          <CustomCard title="Last Column">Last column is wider</CustomCard>
        </Grid>
      </StyledGrid>
    </>
  ); // 4 + 2 + 2 + 4 = 12, so grid will be 4 columns on one row
}
