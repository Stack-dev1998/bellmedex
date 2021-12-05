import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, FormControl, Table, Button } from "react-bootstrap";
import notificationAction from "../redux/actions/notification.action";
//components
import AddJobModal from "./dataTable/addJobModal";
import UpdateJobModal from "./dataTable/updateJobModal";
import DeleteJobModal from "./dataTable/deleteModal";

function DataTable() {
  const dispatch = useDispatch();
  const [jobs, setJobs] = useState([
    { id: 1, title: "nodejs", experience: "2 year", salary: "50k" },
    { id: 2, title: "php", experience: "2 year", salary: "50k" },
    { id: 3, title: "C#", experience: "2 year", salary: "50k" },
  ]);
  const [filterString, setFilterString] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteJobId, setDeleteJobId] = useState(null);

  const filteredJobs = jobs
    .filter((e) => e.title.includes(filterString))
    .map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.experience}</td>
        <td>{item.salary}</td>
        <td>
          <Button className="btn btn-sm" onClick={(e) => setShowAddModal(true)}>
            Add
          </Button>{" "}
          <Button
            className="btn btn-sm btn-primary"
            onClick={(e) => handleShowUpdateModal(item)}
          >
            Edit
          </Button>{" "}
          <Button
            className="btn btn-sm btn-danger"
            onClick={(e) => handleShowDeleteModal(item._id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));

  const allJobs = jobs.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.experience}</td>
        <td>{item.salary}</td>
        <td>
          <Button
            className="btn btn-sm btn-secondry"
            onClick={(e) => setShowAddModal(true)}
          >
            Add
          </Button>{" "}
          <Button
            className="btn btn-sm btn-primary"
            onClick={(e) => handleShowUpdateModal(item)}
          >
            Edit
          </Button>{" "}
          <Button
            className="btn btn-sm btn-danger"
            onClick={(e) => handleShowDeleteModal(item.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  //show update modal
  const handleShowUpdateModal = (item) => {
    setUpdateFormData(item);
    setShowUpdateModal(true);
  };

  //show delete modal
  const handleShowDeleteModal = (id) => {
    setShowDeleteModal(true);
    console.log(id);
    setDeleteJobId(id);
  };

  //perform add job operation
  const handleAddJob = (item) => {
    setJobs([...jobs, item]);
    dispatch(
      notificationAction({
        title: item.title,
        message: item.title + " Job is posted!",
      })
    );
    setShowAddModal(false);
  };

  //perform update operation
  const handleUpdateJob = (job) => {
    let updatedJob = jobs.map((item) => {
      if (item.id == job.id) {
        return job;
      }
      return item;
    });
    setJobs(updatedJob);
    setShowUpdateModal(false);
  };

  //perform Delete operation
  const handleDeleteJob = () => {
    console.log(deleteJobId);
    let updatedJob = jobs.filter((item) => item.id != deleteJobId);
    setJobs(updatedJob);
    setShowDeleteModal(false);
  };

  return (
    <Container>
      <FormControl
        className="w-25 mt-3"
        placeholder="Filter by title..."
        onChange={(e) => {
          setFilterString(e.target.value);
        }}
      />
      <Table striped bordered hover className="mt-1">
        <thead>
          <tr>
            <th>#</th>
            <th>Job Title</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{filterString != "" ? filteredJobs : allJobs}</tbody>
      </Table>

      <AddJobModal
        show={showAddModal}
        handleClose={() => {
          setShowAddModal(false);
        }}
        handleAddJob={handleAddJob}
        id={jobs.length + 1}
      />

      <UpdateJobModal
        show={showUpdateModal}
        handleClose={() => {
          setShowUpdateModal(false);
        }}
        handleUpdateJob={handleUpdateJob}
        updateFormData={updateFormData}
      />

      <DeleteJobModal
        show={showDeleteModal}
        handleClose={() => {
          setShowDeleteModal(false);
        }}
        handleDeleteJob={handleDeleteJob}
      />
    </Container>
  );
}

export default DataTable;
