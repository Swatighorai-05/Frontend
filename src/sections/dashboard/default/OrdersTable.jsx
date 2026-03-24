import PropTypes from 'prop-types';
// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { NumericFormat } from 'react-number-format';

// project imports
import Dot from 'components/@extended/Dot';

// function createData(tracking_no, name, fat, carbs, protein) {
//   return { tracking_no, name, fat, carbs, protein };
// }

function createData(Id, Name, Totalparticipation,Status) {
  return { Id, Name, Totalparticipation,Status };
}

const rows = [
  createData(84564564, 'Hardvi', 40, 2),
  createData(98764564, 'Naimisha', 300, 0),
  createData(98756325, 'Riddhi', 355, 1),
  createData(98652366, 'Khushi', 50, 1),
  createData(13286564, 'Vanshi', 100, 1),
  createData(86739658, 'Reshma', 99, 0),
  createData(13256498, 'Swati', 125, 2),
  createData(98753263, 'Sounak', 89, 2),
  createData(98753275, 'riya', 185, 1),
  createData(98753291, 'Hirvita', 100, 0)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'Id',
    align: 'left',
    disablePadding: false,
    label: 'Id'
  },
  {
    id: 'Name',
    align: 'left',
    disablePadding: true,
    label: 'Name'
  },
  {
    id: 'Totalparticipation',
    align: 'center',
    disablePadding: false,
    label: 'Totalparticipate'
  },
  {
    id: 'Status',
    align: 'left',
    disablePadding: false,

    label: 'Status'
  }
  // {
  //   id: 'protein',
  //   align: 'right',
  //   disablePadding: false,
  //   label: 'Total Amount'
  // }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function OrderStatus({ status }) {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Approved';
      break;
    case 2:
      color = 'error';
      title = 'Rejected';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
}

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const order = 'asc';
  const orderBy = 'Id';

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table aria-labelledby="tableTitle">
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.Id}
                >
                  <TableCell component="th" id={labelId} scope="row">
                    <Link color="secondary">{row.Id}</Link>
                  </TableCell>
                  <TableCell>{row.Name}</TableCell>
                  <TableCell align="center">{row.Totalparticipation}</TableCell>
                  <TableCell>
                    <OrderStatus status={row.status} />
                  </TableCell>
                  {/* <TableCell align="right">
                    <NumericFormat value={row.protein} displayType="text" thousandSeparator prefix="$" />
                  </TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

OrderTableHead.propTypes = { order: PropTypes.any, orderBy: PropTypes.string };

OrderStatus.propTypes = { status: PropTypes.number };
