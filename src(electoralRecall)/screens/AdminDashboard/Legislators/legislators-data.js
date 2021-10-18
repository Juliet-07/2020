import React from 'react'
import {IconButton} from "../../../components/Header/header.style"
import {VscEye as ViewPetitionIcon} from 'react-icons/vsc'
import {MdEdit as EditRecordIcon} from 'react-icons/md'

export const LEGISLATORS_TABLE_HEAD = [
  "Name",
  "State",
  "Constituency",
  "Party",
  "Years",
  "Petitions",
  "Actions"
]

export const LEGISLATORS_TABLE_BODY = [
  {
    name: "George Favour",
    state: "Abia",
    constituency: "Osisioma",
    party: "YDP",
    years: "2",
    petitions: "N/A",
    actions: (
      <div className="action_btns">
        <IconButton title={"View Petition"}>
          <ViewPetitionIcon />
        </IconButton>
        <IconButton title={"Edit Record"}>
          <EditRecordIcon />
        </IconButton>
      </div>
    )
  },
  {
    name: "Vincent Chibuike",
    state: "Enugu",
    constituency: "Holy Ghost",
    party: "APC",
    years: "2",
    petitions: "20,000",
    actions: (
      <div className="action_btns">
        <IconButton title={"View Petition"}>
          <ViewPetitionIcon />
        </IconButton>
        <IconButton title={"Edit Record"}>
          <EditRecordIcon />
        </IconButton>
      </div>
    )
  },
  {
    name: "Ezekiel Nnochiri",
    state: "Calabar",
    constituency: "Oruk",
    party: "PDP",
    years: "2",
    petitions: "65,000",
    actions: (
      <div className="action_btns">
        <IconButton title={"View Petition"}>
          <ViewPetitionIcon />
        </IconButton>
        <IconButton title={"Edit Record"}>
          <EditRecordIcon />
        </IconButton>
      </div>
    )
  },
  {
    name: "Chidera Paul",
    state: "Ebonyi",
    constituency: "Alark",
    party: "APGA",
    years: "2",
    petitions: "30,320",
    actions: (
      <div className="action_btns">
        <IconButton title={"View Petition"}>
          <ViewPetitionIcon />
        </IconButton>
        <IconButton title={"Edit Record"}>
          <EditRecordIcon />
        </IconButton>
      </div>
    )
  },
]