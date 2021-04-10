import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { AppBar, Toolbar, Cutout, Button, List, ListItem } from 'react95';

export default function Navbar() {
	const { push: navigate } = useHistory();
	const [open, setOpen] = useState(false);
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	const handleNavigate = path => {
		setOpen(false);
		navigate('/' + path);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<AppBar style={{ zIndex: '15' }}>
			<Toolbar style={{ justifyContent: 'space-between' }}>
				<div style={{ position: 'relative', display: 'inline-block' }}>
					<Button
						onClick={() => setOpen(!open)}
						active={open}
						style={{ fontWeight: 'bold' }}>
						Start
					</Button>
					{open && (
						<List
							style={{
								position: 'absolute',
								left: '0',
								top: '100%'
							}}
							onClick={() => setOpen(false)}>
							<ListItem onClick={() => handleNavigate('')}>
								<span role="img" aria-label="📁">
									📁
								</span>
								Home
							</ListItem>
							<ListItem onClick={() => handleNavigate('profile')}>
								<span role="img" aria-label="👨‍💻">
									👨‍💻
								</span>
								Profile
							</ListItem>
						</List>
					)}
				</div>
				<Cutout>
					<p>
						<span role="img" aria-label="🔊" style={{ paddingRight: '5px' }}>
							🔊
						</span>
						{time}
					</p>
				</Cutout>
			</Toolbar>
		</AppBar>
	);
}
