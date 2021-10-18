import React from 'react'
import AuthLayout from '../../../components/Layout/AuthLayout'
import {P} from "../../../components/FontSize/styles";
import Button from "../../../components/Button";
import {MdPersonAdd as AddIcon} from "react-icons/md";
import {AiFillFilePdf as PDFIcon} from "react-icons/ai";
import {FaFileCsv as CSVIcon} from "react-icons/fa";
import Spacer from "../../../components/Spacer";
import CustomTable from "../../../components/Table";
import {LEGISLATORS_TABLE_BODY, LEGISLATORS_TABLE_HEAD} from "./legislators-data";
import {AdminLegislatorsWrap} from "./styles";
import {useRouter} from "next/router";

const AdminLegislators = () => {
  const router = useRouter()

  return (
    <AuthLayout admin>
      <AdminLegislatorsWrap>
        <section className="top-layer">
          <aside>
            <h5>Legislators</h5>
            <P>
              You can use the search bar to aid your search.
            </P>
          </aside>

          <aside className="cta">
            <Button
              hasIcon
              size={"sm"}
              type={"button"}
              icon={<AddIcon />}
              text={"Add Legislator"}
              click={() => router.push('/ad/dashboard/legislators/add-legislator')}
            />

            <div className="exports">
              <Button
                hasIcon
                size={"sm"}
                text={"PDF"}
                type={"button"}
                variant={"accent"}
                icon={<PDFIcon />}
              />
              <Button
                hasIcon
                size={"sm"}
                text={"CSV"}
                type={"button"}
                variant={"default"}
                icon={<CSVIcon />}
              />
            </div>
          </aside>
        </section>

        <Spacer mx={"3rem"} />

        <CustomTable
          tableHead={LEGISLATORS_TABLE_HEAD}
          tableBody={LEGISLATORS_TABLE_BODY}
          theadBkColor={"#E4E4E4"}
          theadColor={"#146D3C"}
          rowClick={() => {}}
          bottomGap="4px"
          pageSize={5}
          paginator
          prevNext
        />
      </AdminLegislatorsWrap>
    </AuthLayout>
  )
}

export default AdminLegislators
