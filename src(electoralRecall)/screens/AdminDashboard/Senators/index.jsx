import React from 'react'
import AuthLayout from '../../../components/Layout/AuthLayout'
import {P} from "../../../components/FontSize/styles";
import {AdminSenatorsWrap} from "./styles";
import Button from "../../../components/Button";
import {MdPersonAdd as AddIcon} from 'react-icons/md'
import {AiFillFilePdf as PDFIcon} from 'react-icons/ai'
import {FaFileCsv as CSVIcon} from 'react-icons/fa'
import CustomTable from "../../../components/Table";
import {SENATOR_TABLE_BODY, SENATOR_TABLE_HEAD} from "./senator-data";
import Spacer from "../../../components/Spacer";
import {useRouter} from "next/router";

const AdminSenators = () => {
  const router = useRouter();

  return (
    <AuthLayout admin>
      <AdminSenatorsWrap>
        <section className="top-layer">
          <aside>
            <h5>Senators</h5>
            <P>
              You can use the search bar to aid your search.
            </P>
          </aside>

          <aside className="cta">
            <Button
              hasIcon
              size={"sm"}
              type={"button"}
              icon={<AddIcon/>}
              text={"Add Senator"}
              click={() => router.push('/ad/dashboard/senators/add-senator')}
            />

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
          tableHead={SENATOR_TABLE_HEAD}
          tableBody={SENATOR_TABLE_BODY}
          theadBkColor={"#E4E4E4"}
          theadColor={"#146D3C"}
          rowClick={() => {
          }}
          bottomGap="4px"
          pageSize={5}
          paginator
          prevNext
        />
      </AdminSenatorsWrap>
    </AuthLayout>
  )
}

export default AdminSenators
