/* eslint-disable */
export type Maybe<T> = T | null;

export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export type ViewerQueryVariables = {};

export type ViewerQueryQuery = {
  __typename?: "Query";

  viewer: Maybe<ViewerQueryViewer>;
};

export type ViewerQueryViewer = ViewerQueryUserFragment;

export type ViewerQueryUserFragment = {
  __typename?: "SpotifyUser";

  displayName: string;

  email: string;

  birthdate: DateTime;

  followers: ViewerQueryUserFollowers;

  href: Maybe<string>;

  images: ViewerQueryUserImages[];
};

export type ViewerQueryUserFollowers = {
  __typename?: "SpotifyUserFollowers";

  total: number;
};

export type ViewerQueryUserImages = {
  __typename?: "SpotifyUserImage";

  url: string;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";

// ====================================================
// Fragments
// ====================================================

export const ViewerQueryUserFragmentDoc = gql`
  fragment ViewerQuery_user on SpotifyUser {
    displayName
    email
    birthdate
    followers {
      total
    }
    href
    images {
      url
    }
  }
`;

// ====================================================
// Components
// ====================================================

export const ViewerQueryDocument = gql`
  query ViewerQuery {
    viewer {
      ...ViewerQuery_user
    }
  }

  ${ViewerQueryUserFragmentDoc}
`;
export class ViewerQueryComponent extends React.Component<
  Partial<ReactApollo.QueryProps<ViewerQueryQuery, ViewerQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<ViewerQueryQuery, ViewerQueryVariables>
        query={ViewerQueryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ViewerQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<ViewerQueryQuery, ViewerQueryVariables>
> &
  TChildProps;
export function ViewerQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ViewerQueryQuery,
        ViewerQueryVariables,
        ViewerQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ViewerQueryQuery,
    ViewerQueryVariables,
    ViewerQueryProps<TChildProps>
  >(ViewerQueryDocument, operationOptions);
}
export function useViewerQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<ViewerQueryVariables>
) {
  return ReactApolloHooks.useQuery<ViewerQueryQuery, ViewerQueryVariables>(
    ViewerQueryDocument,
    baseOptions
  );
}
