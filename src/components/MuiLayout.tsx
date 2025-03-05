import { Box, Stack, Divider, Grid2 } from '@mui/material';
import React from 'react';

export default function MuiLayout() {
	return (
		<>
			<Stack
				sx={{ border: '1px solid' }}
				direction='row'
				spacing={2}
				divider={<Divider orientation='vertical' flexItem />}
			>
				<Box
					sx={{
						backgroundColor: 'primary.main',
						color: 'white',
						height: '100px',
						width: '100px',
						padding: '16px',
						'&:hover': {
							backgroundColor: 'primary.light'
						}
					}}
				>
					Codevolution
				</Box>
				<Box
					display='flex'
					height='100px'
					width='100px'
					bgcolor='success.light'
					p={2}
				></Box>
			</Stack>
			<Grid2 container my={4}>
				<Grid2 size={ 3}>
					<Box bgcolor='primary.light' p={2}>
						Item 1
					</Box>
				</Grid2>
				<Grid2 size={ 9}>
					<Box bgcolor='primary.light' p={2}>
						Item 2
					</Box>
				</Grid2>
				<Grid2 size={ 9}>
					<Box bgcolor='primary.light' p={2}>
						Item 3
					</Box>
				</Grid2>
				<Grid2 size={ 3}>
					<Box bgcolor='primary.light' p={2}>
						Item 4
					</Box>
				</Grid2>
			</Grid2>
		</>
	);
}
