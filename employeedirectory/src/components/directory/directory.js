import React from "react";
import "./directory.css";
import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
import SearchForm from "../SearchForm";
import TableBody from "../tableBody/tableBody";
import TableHead from "../tableHead/tableHead";
import API from "../../utils/API";

class Directory extends React.Component {
    state = {
        employees: [],
        sortID: "desc",
        sortName: "asc",
        search: ""
    }

    componentDidMount = () => {
        this.getEmployeeData();
    }
    
    getEmployeeData = () => {
        API.getBaseBreedsList()
        .then(res => {
            const empList = this.createEmpList(res.data);
            
            this.setState({employees: empList});
            this.setState({empListFilter: empList});
        })
        .catch(err => console.log(err));
    }

   
    createEmpList = list => {
        return list.map(emp => {
            const empData = {
                id: emp.id,
                name: emp.login,
                photo: emp.avatar_url,
            }
            
            return empData;
        });
    }

    
    createFilteredEmpList = search => {
        let filteredList = this.state.employees.filter(item => {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return filteredList;
    }

    handleInput = event => {
        this.setState({search: event.target.value});
    }

    handleSortId = event => {
        event.preventDefault();
        this.setState({employees: this.state.employees.sort((a, b) => {
            if(this.state.sortID === "asc") {
                this.setState({sortID: "desc"});
                return a.id - b.id;
            } else {
                this.setState({sortID: "asc"});
                return b.id - a.id;
            } 
        })});
    }

    handleSortName = event => {
        event.preventDefault();
        this.setState({employees: this.state.employees.sort((a, b) => {
            const x = a.name.toLowerCase();
            const y = b.name.toLowerCase();
            if(this.state.sortName === "asc") {
                this.setState({sortName: "desc"});
                return x < y ? -1 : 1;
            } else {
                this.setState({sortName: "asc"});
                return x > y ? -1 : 1;
            }
        })});
    }

    render() {
        let empListFilter = this.createFilteredEmpList(this.state.search);

        return (
            <div>
                <Container>
                    <TableHead
                    headId = "ID"
                    handleSortId = {this.handleSortId}
                    headPhoto = "Pic"
                    headName = "UserName"
                    handleSortName = {this.handleSortName}
                    headEmail = "Email"
                    />
                    <TableBody
                    empListFilter={empListFilter}
                    />
                
                    
                </Container>
                <Container>
                    <Table variant="dark" hover>
                        
                        
                    </Table>
                </Container>
            </div>
        );
    } 
}

export default Directory;