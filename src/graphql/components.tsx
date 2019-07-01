/* eslint-disable */
export type Maybe<T> = T | null;

/** Available user plans. */
export enum SpotifyUserPlan {
  Premium = "PREMIUM",
  Free = "FREE",
  Open = "OPEN"
}
/** Available units for a progression. */
export enum ProgressionUnit {
  Milliseconds = "MILLISECONDS",
  MinutesSeconds = "MINUTES_SECONDS"
}

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

export type ViewerQueryUserPlaylistsItemFragment = {
  __typename?: "SpotifyUserPlaylist";

  href: string;

  name: string;

  uri: string;
};

export type ViewerQueryUserFragment = {
  __typename?: "SpotifyUser";

  displayName: string;

  plan: SpotifyUserPlan;

  email: string;

  birthdate: DateTime;

  followers: ViewerQueryUserFollowers;

  href: Maybe<string>;

  images: ViewerQueryUserImages[];

  playlists: ViewerQueryUserPlaylists;
};

export type ViewerQueryUserFollowers = {
  __typename?: "SpotifyUserFollowers";

  total: number;
};

export type ViewerQueryUserImages = {
  __typename?: "SpotifyUserImage";

  url: string;
};

export type ViewerQueryUserPlaylists = {
  __typename?: "SpotifyPaginatedList";

  href: string;

  items: ViewerQueryUserItems[];
};

export type ViewerQueryUserItems = {
  __typename?: "PaginatedItem";

  id: string;
} & ViewerQueryUserPlaylistsItemFragment;

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";

// ====================================================
// Fragments
// ====================================================

export const ViewerQueryUserPlaylistsItemFragmentDoc = gql`
  fragment ViewerQuery_user_playlists_item on SpotifyUserPlaylist {
    href
    name
    uri
  }
`;

export const ViewerQueryUserFragmentDoc = gql`
  fragment ViewerQuery_user on SpotifyUser {
    displayName
    plan
    email
    birthdate
    followers {
      total
    }
    href
    images {
      url
    }
    playlists {
      href
      items {
        id
        ...ViewerQuery_user_playlists_item
      }
    }
  }

  ${ViewerQueryUserPlaylistsItemFragmentDoc}
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
