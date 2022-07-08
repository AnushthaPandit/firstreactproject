import React from "react";
import { Link } from "react-router-dom";
import {
	Typography,
	Card,
	CardActions,
	Button,
	CardContent,
	CardMedia,
	Grid,
	Container,
} from "@material-ui/core";

import useStyles from "./styles";

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const MainContent = () => {
	const classes = useStyles();
	return (
		<>
			<main>
				<div className={classes.container}>
					<Container maxWidth="sm">
						<Typography
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom>
							Photo Gallery
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="textSecondary"
							gutterBottom>
							Hello Everyone!!! This section will contain the image gallery of
							your page to go on with your memories anytime and anywhere..
						</Typography>
						<div>
							<Grid
								container
								spacing={4}
								justifyContent="center"
								alignItems="center">
								<Grid item>
									<Button variant="contained" color="primary">
										See my photos
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Secondary action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container maxWidth="md">
					<Grid container spacing={4}>
						{card.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										title="image title"
									/>
									<CardContent className={classes.CardContent}>
										<Typography gutterBottom variant="h5">
											Heading
										</Typography>
										<Typography>
											This is a media card. You can use this section to describe
											the content.
										</Typography>
									</CardContent>
									<CardActions>
										<Link to="/ViewPage">
											<Button size="small" color="primary">
												View
											</Button>
										</Link>

										<Link to="/Editpage">
											<Button size="small" color="primary">
												Edit
											</Button>
										</Link>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</>
	);
};

export default MainContent;
