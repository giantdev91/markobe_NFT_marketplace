<div className="admin-quest-menus">
  <Link to="#" onClick={ handleShow1 } className={`admin-quest-menuitem ${flag === 1 ? 'active' : ''}`}>1. Set up</Link>
  <Link to="#" onClick={ handleShow2 } className={`admin-quest-menuitem ${flag === 2 ? 'active' : ''}`}>2. Entries</Link>
  <Link to="#" onClick={ handleShow3 } className={`admin-quest-menuitem ${flag === 3 ? 'active' : ''}`}>3. Eligibility</Link>
  <Link to="#" onClick={ handleShow4 } className={`admin-quest-menuitem ${flag === 4 ? 'active' : ''}`}>4. Reward</Link>
</div>;
