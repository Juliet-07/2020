import React from 'react'
import AuthLayout from '../../../components/Layout/AuthLayout'
import {AdminOverviewWrap} from "./styles";
import {P} from "../../../components/FontSize/styles";
import Button from "../../../components/Button";
import {MdPersonAdd as AddIcon} from "react-icons/md";
import {AiFillFilePdf as PDFIcon} from "react-icons/ai";
import {FaFileCsv as CSVIcon} from "react-icons/fa";
import Spacer from "../../../components/Spacer";
import {useRouter} from "next/router";
import DashboardCards from "./DashboardCards";
import Divider from "../../../components/Dividers/index.component";
import StatePetitionSummary from "./StatePetitionSummary";

const AdminOverview = () => {
  const router = useRouter();

  return (
    <AuthLayout admin>
      <AdminOverviewWrap>
        <section className="top-layer">
          <aside>
            <h5>Welcome, Admin</h5>
            <P>
              Catch up with the latest activities
            </P>
          </aside>

          <aside className="cta">
            <Button
              hasIcon
              size={"sm"}
              type={"button"}
              icon={<AddIcon/>}
              text={"Add Constituency"}
              click={() => router.push('/ad/dashboard/add-constituency')}
            />
          </aside>
        </section>

        <Spacer mx={"3rem"}/>

        <DashboardCards />

        <Spacer mx={"2rem"} />

        <Divider />

        <Spacer mx={"2rem"} />

        <StatePetitionSummary />
      </AdminOverviewWrap>
    </AuthLayout>
  )
}

export default AdminOverview
