import React from 'react';
import { Typography } from '@mui/material';

export default function MuiTypography() {
	return (
		<div>
			<Typography variant='h1'>H1 heading</Typography>
			<Typography variant='h3'>H1 heading</Typography>
			<Typography variant='h4' component='h1' gutterBottom>H1 heading</Typography>
			<Typography variant='h6'>H1 heading</Typography>

			<Typography variant='subtitle1'>Sub title 1</Typography>
			<Typography variant='subtitle2'>Sub Title 2</Typography>

			<Typography variant='body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus optio nam voluptate amet tempore eaque distinctio ratione quo id est quos, minima alias unde, harum aperiam veniam illo minus animi!</Typography>
			<Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sapiente id itaque accusamus fuga ea, mollitia vero culpa quas dolorem dignissimos beatae minima vel perferendis aliquid. Dicta accusantium libero ipsam?</Typography>
		</div>
	);
}
