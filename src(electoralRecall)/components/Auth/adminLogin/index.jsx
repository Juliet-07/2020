import React, { useState, Fragment } from "react";
import { useRouter } from "next/router";
import { AuthWrapper } from "../styled";
import LOGO from "../../../assets/images/electoral-recall-logo.png";
import { AuthTab } from "../AuthTab/index";
import { FlexibleDiv } from "../../Box/styles";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Recall",
    url: "/recall",
  }
];

const AuthComponent = ({ logo, title, tagline, tab, form, capitalized }) => {
  const Router = useRouter();
  const [active, setActive] = useState(1);

  return (
    <AuthWrapper capitalized={capitalized}>
      <FlexibleDiv
        className="form-section"
        // justifyContent="start"
        flexWrap="no-wrap"
        flexDir="column"
      >
        {logo ? logo : <img src={LOGO} alt="embed logo" />}
        <div className="text">
          <h4>{title || "Admin Sign-in to Electoral Recall"}</h4>
          <p>{tagline || "Please enter your credentials to proceed."}</p>
        </div>

        {/* {tab && (
					<FlexibleDiv flexDir="row" className="tab" width="90%">
						{tab.map(({ id, icon, title, bodyText }) => (
							<AuthTab
								key={id}
								icon={icon}
								title={title}
								bodyText={bodyText}
								onItemClicked={() => setActive(id)}
								isActive={active === id}
							/>
						))}
					</FlexibleDiv>
				)} */}

        {tab ? (
          <FlexibleDiv className="content">
            {tab.map(({ id, content }) => {
              return active === id ? (
                <Fragment key={id}>{content} </Fragment>
              ) : (
                ""
              );
            })}
          </FlexibleDiv>
        ) : (
          <FlexibleDiv className="content">{form}</FlexibleDiv>
        )}
      </FlexibleDiv>
      <FlexibleDiv className="text-section" flexDir="column">
        <FlexibleDiv flexDir="column" width="80%" alignItems="flex-start">
          <p>
            Not everything that is faced <br /> can be changed, but nothing{" "}
            <br />
            can be changed until it is faced.
          </p>
          <h1>
            <strong>James Baldwin</strong>
          </h1>
        </FlexibleDiv>

        <FlexibleDiv className="form-links">
          <ul>
            {links.map(({ url, name }) => (
              <li key={url}>
                <a onClick={() => Router.push(url)}>{name}</a>
              </li>
            ))}
          </ul>
        </FlexibleDiv>
      </FlexibleDiv>
    </AuthWrapper>
  );
};

export default AuthComponent;
