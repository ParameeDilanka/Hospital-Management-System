import * as React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './demo-data/appointments';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  text: theme.typography.h6,
  formControlLabel: {
    ...theme.typography.caption,
    fontSize: '1rem',
  },
}));

const currentDate = '2022-04-14';
const editingOptionsList = [
  { id: 'allowAdding', text: 'Adding' },
  { id: 'allowDeleting', text: 'Deleting' },
  { id: 'allowUpdating', text: 'Updating' },
  { id: 'allowResizing', text: 'Resizing' },
  { id: 'allowDragging', text: 'Dragging' },
];

const EditingOptionsSelector = ({
  options, onOptionsChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.text}>
        Enabled Options
      </Typography>
      <FormGroup row>
        {editingOptionsList.map(({ id, text }) => (
          <FormControlLabel
            control={(
              <Checkbox
                checked={options[id]}
                onChange={onOptionsChange}
                value={id}
                color="primary"
              />
            )}
            classes={{ label: classes.formControlLabel }}
            label={text}
            key={id}
            disabled={(id === 'allowDragging' || id === 'allowResizing') && !options.allowUpdating}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default () => {
  const [data, setData] = React.useState(appointments);
  const [editingOptions, setEditingOptions] = React.useState({
    allowAdding: true,
    allowDeleting: true,
    allowUpdating: true,
    allowDragging: true,
    allowResizing: true,
  });
  const [addedAppointment, setAddedAppointment] = React.useState({});
  const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] = React.useState(false);

  const {
    allowAdding, allowDeleting, allowUpdating, allowResizing, allowDragging,
  } = editingOptions;

  const onCommitChanges = React.useCallback(({ added, changed, deleted }) => {
    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      setData([...data, { id: startingAddedId, ...added }]);
    }
    if (changed) {
      setData(data.map(appointment => (
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)));
    }
    if (deleted !== undefined) {
      setData(data.filter(appointment => appointment.id !== deleted));
    }
    setIsAppointmentBeingCreated(false);
  }, [setData, setIsAppointmentBeingCreated, data]);
  const onAddedAppointmentChange = React.useCallback((appointment) => {
    setAddedAppointment(appointment);
    setIsAppointmentBeingCreated(true);
  });
  const handleEditingOptionsChange = React.useCallback(({ target }) => {
    const { value } = target;
    const { [value]: checked } = editingOptions;
    setEditingOptions({
      ...editingOptions,
      [value]: !checked,
    });
  });

  const TimeTableCell = React.useCallback(React.memo(({ onDoubleClick, ...restProps }) => (
    <WeekView.TimeTableCell
      {...restProps}
      onDoubleClick={allowAdding ? onDoubleClick : undefined}
    />
  )), [allowAdding]);

  const CommandButton = React.useCallback(({ id, ...restProps }) => {
    if (id === 'deleteButton') {
      return <AppointmentForm.CommandButton id={id} {...restProps} disabled={!allowDeleting} />;
    }
    return <AppointmentForm.CommandButton id={id} {...restProps} />;
  }, [allowDeleting]);

  const allowDrag = React.useCallback(
    () => allowDragging && allowUpdating,
    [allowDragging, allowUpdating],
  );
  const allowResize = React.useCallback(
    () => allowResizing && allowUpdating,
    [allowResizing, allowUpdating],
  );

  return (
<div> 
  <link rel="stylesheet" href="staffStyles.css"></link>
  <link rel="stylesheet" href="cardStyles.css"></link>
  <link rel="stylesheet" href="itemStyles.css"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <body>
<div class="main-container">
  <div class="flex-box-container">
    <div class="flex-box sidebar-container">
      <div class="sidebar-item logo">
          <img class="logo" src="/logo.png"/>
      </div>
      <div class="sidebar-item profile">
          <img class="profileImg" src={require("../../../../images/profile.png").default}/>
          <h6>Nuwan Perera</h6>
         <h7>Doctor</h7>
      </div>
      <div class="sidebar-item sidebar-menu">
           
            <ul>
            <li className="item">
                            <Link to={"/appointment/mainstaff"}><i class="fa-solid fa-house"></i><span>Dashboard</span></Link>
              </li>
              <li className="item">
                            <Link to={"/appointment/accept"}><i class="fas fa-list-ul"></i><span>View</span></Link>
              </li>

              <li className="item">
                            <Link to={"/appointment/demo"}><i class="fas fa-clock" aria-hidden="true"></i><span>Schedular</span></Link>
              </li>
            </ul>
          
      </div>
      <div class="sidebar-item logout">
        <ul>
            <li><a class="logout-btn"><i class="fa fa-sign-out" aria-hidden="true"></i><span>Log Out</span></a></li>
        </ul>  
      </div>
    </div>
    <div class ="flex-box content-container">
          <div class ="grid-container">
            <div class ="grid-item item-1">
              <div class="scroll-item scroll-item-1">
            <h2>Appointment Schedular</h2>

    <React.Fragment>
      <EditingOptionsSelector
        options={editingOptions}
        onOptionsChange={handleEditingOptionsChange}
      />
      <Paper>
        <Scheduler
          data={data}
          height={600}
        >
          <ViewState
            currentDate={currentDate}
          />
          <EditingState
            onCommitChanges={onCommitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={onAddedAppointmentChange}
          />

          <IntegratedEditing />
          <WeekView
            startDayHour={9}
            endDayHour={19}
            timeTableCellComponent={TimeTableCell}
          />

          <Appointments />

          <AppointmentTooltip
            showOpenButton
            showDeleteButton={allowDeleting}
          />
          <AppointmentForm
            commandButtonComponent={CommandButton}
            readOnly={isAppointmentBeingCreated ? false : !allowUpdating}
          />
          <DragDropProvider
            allowDrag={allowDrag}
            allowResize={allowResize}
          />
        </Scheduler>
      </Paper>
    </React.Fragment>
  
    </div>              
        </div>
    </div> 
    </div> 
  </div>       
</div>
</body>
</div> 
    );
  }
