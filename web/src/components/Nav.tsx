import { Button, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'
import { downloadCsv } from '../services/download_csv'
import { useInventory } from '../hooks/useInventory'
import { makeCSV } from '../services/make_csv'
import { ScanIcon } from '../icons/scan-icon'
import { useModal } from '../hooks/useModal'
import { CSVIcon } from '../icons/csv-icon'

export const NavbarComponent = () => {
  const { inventory } = useInventory()
  const { toggleModal } = useModal()

  const handleDownloadCSV = () => {
    const csv = makeCSV({ data: inventory })
    downloadCsv({ data: csv })
  }

  return (
    <>
      <Navbar container>
        <NavbarBrand href='/'>QR Inventory Computers</NavbarBrand>
        <Nav className='gap-2'>
          <NavItem>
            <Button className='d-flex align-items-center gap-1' color='secondary' onClick={handleDownloadCSV}>
              <CSVIcon />
              Export CSV
            </Button>
          </NavItem>
          <NavItem>
            <Button className='d-flex align-items-center gap-1' color='primary' onClick={toggleModal}>
              <ScanIcon />
              Scan QR
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  )
}
