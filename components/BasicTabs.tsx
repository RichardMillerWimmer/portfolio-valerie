import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import Publication from './Publication';
import Presentation from './Presentation';
import { PublicationType, PresentationType } from '../pages/projects'


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function BasicTabs(props: any) {
  const [projectType, setProjectType] = useState(0);
  const { publications, presentations } = props


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setProjectType(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={projectType} onChange={handleChange} centered aria-label="Project Tabs">
          <Tab label="Publications" key="Publications" {...a11yProps(0)} />
          <Tab label="Presentations" key="Presentations" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={projectType} index={0}>
        <h3>Publications</h3>
        <div className='projectGridContainer'>
          {publications.items.map((publication: PublicationType) => (
            <div key={publication.id}>
              <Publication  {...publication} />
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel value={projectType} index={1}>
        <h3>Presentations</h3>
        <div className='projectGridContainer'>
          {presentations.items.map((presentation: PresentationType) => (
            <div key={presentation.id}>
              <Presentation {...presentation} />
            </div>
          ))}
        </div>
      </TabPanel>
    </Box>
  );
}

export default BasicTabs