import { Link, NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './ManageSpecialty.scss';
import { path } from '../../../utils';
import CreateUpdateSpecialty from './action/CreateUpdateSpecialty';

function ManageSpecialty() {
    return (
        <div className='manage__specialty__wrapper container'>
            <h3 className='manage__specialty__title'>Management Specialties Doctor</h3>
            <div className='manage__specialty__action__btn'>
                <NavLink to={`${path.SYSTEM}/manage-specialty/create`} >
                    <button type="button" className="btn btn-custom btn-primary">Add</button>
                </NavLink>
                <NavLink to={`${path.SYSTEM}/manage-specialty/update`} >
                    <button type="button" className="btn btn-custom btn-info">Update</button>
                </NavLink>
                <NavLink to={`${path.SYSTEM}/manage-specialty/delete`} >
                    <button type="button" className="btn btn-custom btn-danger">Delete</button>
                </NavLink>
            </div>
            <div className='manage__specialty__content'>
                <Switch>
                    <Route path={`${path.SYSTEM}/manage-specialty/create`} component={CreateUpdateSpecialty} />
                    <Route path={`${path.SYSTEM}/manage-specialty/update`} component={CreateUpdateSpecialty} />  
                    <Route path={`${path.SYSTEM}/manage-specialty/delete`} component={CreateUpdateSpecialty} />
                </Switch>
            </div>
        </div>
    )
}

export default ManageSpecialty;