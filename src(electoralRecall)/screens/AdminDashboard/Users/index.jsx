import React from 'react'
import AuthLayout from '../../../components/Layout/AuthLayout'
import {AdminUsersWrap} from "./styles";
import {P} from "../../../components/FontSize/styles";
import Button from "../../../components/Button";
import {AiFillFilePdf as PDFIcon} from "react-icons/ai";
import {FaFileCsv as CSVIcon} from "react-icons/fa";
import Spacer from "../../../components/Spacer";
import {USER_TABLE_BODY, USER_TABLE_HEAD} from "./user-data";
import CustomTable from "../../../components/Table";

const AdminUsers = () => {
  return (
    <AuthLayout admin>
      <AdminUsersWrap>
        <section className="top-layer">
          <aside>
            <h5>Registered Users</h5>
            <P>
              You can use the search bar to aid your search.
            </P>
          </aside>

          <aside className="cta">
            <div className="exports">
              <Button
                hasIcon
                size={"sm"}
                text={"PDF"}
                type={"button"}
                variant={"accent"}
                icon={<PDFIcon/>}
              />
              <Button
                hasIcon
                size={"sm"}
                text={"CSV"}
                type={"button"}
                variant={"default"}
                icon={<CSVIcon/>}
              />
            </div>
          </aside>
        </section>

        <Spacer mx={"3rem"}/>

        <CustomTable
          tableHead={USER_TABLE_HEAD}
          tableBody={USER_TABLE_BODY}
          theadBkColor={"#E4E4E4"}
          theadColor={"#146D3C"}
          rowClick={() => {
          }}
          bottomGap="4px"
          pageSize={5}
          paginator
          prevNext
        />
      </AdminUsersWrap>
    </AuthLayout>
  )
}

export default AdminUsers
