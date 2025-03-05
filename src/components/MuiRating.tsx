import React, { useState } from 'react';
import { Rating, Stack } from '@mui/material';


export default function MuiRating() {
	const [value, setValue] = useState<number | null>(null);
	console.log({value});
	const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
		setValue(newValue);
	}
	
  return (
	<Stack spacing={2}>
	  <Rating value={value} onChange={handleChange} precision={0.5} size='large'/>
	</Stack>
  )
}
