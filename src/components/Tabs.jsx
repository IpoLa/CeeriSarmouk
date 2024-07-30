import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Typography, Grow } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
    width: '100%',
    overflow: 'hidden',
    margin: 0,
  },
  tabImage: {
    width: 'auto',
    height: '100px',
  },
  tabPanel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  contentImage: {
    maxWidth: 300,
    height: 'auto',
    marginRight: '20px', // Adjust as needed
  },
});

const TabsComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ceerisarmouk.com/services.php');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTabsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 1500, md: 1200, sm: 480 }, justifyContent: 'center', bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className={classes.tabsContainer} // Apply styles here
      >
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            className="mx-3"
            label={
              <div>
                <img src={tab.image} className={classes.tabImage} alt={`Tab ${index + 1}`} />
                <Typography>{tab.title}</Typography>
              </div>
            }
          />
        ))}
      </Tabs>
      {tabsData.map((tab, index) => (
        <TabPanel
          key={index}
          value={value}
          index={index}
        >
          <Grow in={value === index} timeout={500}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img
                src={tab.contentImage}
                alt={`Tab ${index + 1}`}
                className={classes.contentImage}
              />
              <Typography>{tab.content}</Typography>
            </div>
          </Grow>
        </TabPanel>
      ))}
    </Box>
  );
};

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default TabsComponent;
