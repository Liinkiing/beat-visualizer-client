/* eslint-disable */
export type Maybe<T> = T | null;

export interface ChangeUserPlayerStateInput {
  /** Set the shuffling state of the player */
  shuffle: boolean;
  /** Set the repeat state of the player */
  repeat: SpotifyUserRepeatMode;

  clientMutationId: Maybe<string>;
}
/** Available user plans. */
export enum SpotifyUserPlan {
  Premium = "PREMIUM",
  Free = "FREE",
  Open = "OPEN"
}
/** Available repeat mode. */
export enum SpotifyUserRepeatMode {
  Track = "TRACK",
  Context = "CONTEXT",
  Off = "OFF"
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

export type ToggleUserPlayerPlaybackMutationVariables = {};

export type ToggleUserPlayerPlaybackMutationMutation = {
  __typename?: "Mutation";

  toggleUserPlayerPlayback: ToggleUserPlayerPlaybackMutationToggleUserPlayerPlayback;
};

export type ToggleUserPlayerPlaybackMutationToggleUserPlayerPlayback = {
  __typename?: "ToggleUserPlayerPlaybackPayload";

  player: ToggleUserPlayerPlaybackMutationPlayer;
};

export type ToggleUserPlayerPlaybackMutationPlayer = PlayerBottomBarPlayerFragment;

export type ViewerQueryVariables = {};

export type ViewerQueryQuery = {
  __typename?: "Query";

  viewer: Maybe<ViewerQueryViewer>;
};

export type ViewerQueryViewer = ViewerQueryUserFragment;

export type PlayerBottomBarPlayerFragment = {
  __typename?: "SpotifyUserPlayer";

  id: string;

  playing: boolean;
};

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

  player: ViewerQueryUserPlayer;

  href: Maybe<string>;

  images: ViewerQueryUserImages[];

  playlists: ViewerQueryUserPlaylists;
};

export type ViewerQueryUserFollowers = {
  __typename?: "SpotifyUserFollowers";

  total: number;
};

export type ViewerQueryUserPlayer = PlayerBottomBarPlayerFragment;

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

export const PlayerBottomBarPlayerFragmentDoc = gql`
  fragment PlayerBottomBar_player on SpotifyUserPlayer {
    id
    playing
  }
`;

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
    player {
      ...PlayerBottomBar_player
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

  ${PlayerBottomBarPlayerFragmentDoc}
  ${ViewerQueryUserPlaylistsItemFragmentDoc}
`;

// ====================================================
// Components
// ====================================================

export const ToggleUserPlayerPlaybackMutationDocument = gql`
  mutation ToggleUserPlayerPlaybackMutation {
    toggleUserPlayerPlayback {
      player {
        ...PlayerBottomBar_player
      }
    }
  }

  ${PlayerBottomBarPlayerFragmentDoc}
`;
export class ToggleUserPlayerPlaybackMutationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      ToggleUserPlayerPlaybackMutationMutation,
      ToggleUserPlayerPlaybackMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        ToggleUserPlayerPlaybackMutationMutation,
        ToggleUserPlayerPlaybackMutationVariables
      >
        mutation={ToggleUserPlayerPlaybackMutationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ToggleUserPlayerPlaybackMutationProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    ToggleUserPlayerPlaybackMutationMutation,
    ToggleUserPlayerPlaybackMutationVariables
  >
> &
  TChildProps;
export type ToggleUserPlayerPlaybackMutationMutationFn = ReactApollo.MutationFn<
  ToggleUserPlayerPlaybackMutationMutation,
  ToggleUserPlayerPlaybackMutationVariables
>;
export function ToggleUserPlayerPlaybackMutationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ToggleUserPlayerPlaybackMutationMutation,
        ToggleUserPlayerPlaybackMutationVariables,
        ToggleUserPlayerPlaybackMutationProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ToggleUserPlayerPlaybackMutationMutation,
    ToggleUserPlayerPlaybackMutationVariables,
    ToggleUserPlayerPlaybackMutationProps<TChildProps>
  >(ToggleUserPlayerPlaybackMutationDocument, operationOptions);
}
export function useToggleUserPlayerPlaybackMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    ToggleUserPlayerPlaybackMutationMutation,
    ToggleUserPlayerPlaybackMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    ToggleUserPlayerPlaybackMutationMutation,
    ToggleUserPlayerPlaybackMutationVariables
  >(ToggleUserPlayerPlaybackMutationDocument, baseOptions);
}
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
