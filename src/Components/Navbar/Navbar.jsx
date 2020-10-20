import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function MenuAppBar() {
	const classes = useStyles();
	const [ mode, setMode ] = React.useState(true);

	const handleChange = (event) => {
		setMode(event.target.checked);
	};

	return (
		<div className={classes.root}>
			<FormGroup>
				<FormControlLabel
					control={<Switch checked={mode} onChange={handleChange} aria-label="login switch" />}
					label={mode ? 'Light Mode' : 'Dark Mode'}
				/>
			</FormGroup>
			<AppBar position="static" color="white">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Where in the World?
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
