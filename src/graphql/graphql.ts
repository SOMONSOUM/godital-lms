import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Upload: any;
};

export type GqlMutation = {
  __typename?: 'Mutation';
  createUserMutation?: Maybe<GqlOk>;
  multipleUpload?: Maybe<Array<Maybe<GqlUploadFileResponse>>>;
  singleUpload?: Maybe<GqlUploadFileResponse>;
  testingMuation?: Maybe<Scalars['Boolean']>;
};


export type GqlMutationCreateUserMutationArgs = {
  input: GqlUserInput;
};


export type GqlMutationMultipleUploadArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
};


export type GqlMutationSingleUploadArgs = {
  file?: InputMaybe<Scalars['Upload']>;
};

export type GqlOk = {
  __typename?: 'Ok';
  ok?: Maybe<Scalars['Boolean']>;
};

export type GqlQuery = {
  __typename?: 'Query';
  hellWorld?: Maybe<Scalars['String']>;
};

export type GqlSubscription = {
  __typename?: 'Subscription';
  testingSub?: Maybe<Scalars['String']>;
};

export type GqlUploadFileResponse = {
  __typename?: 'UploadFileResponse';
  encoding?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GqlUser = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type GqlUserInput = {
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type GqlResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Mutation: ResolverTypeWrapper<{}>;
  Ok: ResolverTypeWrapper<GqlOk>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  UploadFileResponse: ResolverTypeWrapper<GqlUploadFileResponse>;
  User: ResolverTypeWrapper<GqlUser>;
  UserInput: GqlUserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type GqlResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  JSON: Scalars['JSON'];
  Mutation: {};
  Ok: GqlOk;
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  Upload: Scalars['Upload'];
  UploadFileResponse: GqlUploadFileResponse;
  User: GqlUser;
  UserInput: GqlUserInput;
};

export interface GqlJsonScalarConfig extends GraphQLScalarTypeConfig<GqlResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type GqlMutationResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Mutation'] = GqlResolversParentTypes['Mutation']> = {
  createUserMutation?: Resolver<Maybe<GqlResolversTypes['Ok']>, ParentType, ContextType, RequireFields<GqlMutationCreateUserMutationArgs, 'input'>>;
  multipleUpload?: Resolver<Maybe<Array<Maybe<GqlResolversTypes['UploadFileResponse']>>>, ParentType, ContextType, Partial<GqlMutationMultipleUploadArgs>>;
  singleUpload?: Resolver<Maybe<GqlResolversTypes['UploadFileResponse']>, ParentType, ContextType, Partial<GqlMutationSingleUploadArgs>>;
  testingMuation?: Resolver<Maybe<GqlResolversTypes['Boolean']>, ParentType, ContextType>;
};

export type GqlOkResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Ok'] = GqlResolversParentTypes['Ok']> = {
  ok?: Resolver<Maybe<GqlResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlQueryResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Query'] = GqlResolversParentTypes['Query']> = {
  hellWorld?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
};

export type GqlSubscriptionResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Subscription'] = GqlResolversParentTypes['Subscription']> = {
  testingSub?: SubscriptionResolver<Maybe<GqlResolversTypes['String']>, "testingSub", ParentType, ContextType>;
};

export interface GqlUploadScalarConfig extends GraphQLScalarTypeConfig<GqlResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type GqlUploadFileResponseResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['UploadFileResponse'] = GqlResolversParentTypes['UploadFileResponse']> = {
  encoding?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlUserResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['User'] = GqlResolversParentTypes['User']> = {
  email?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  fullname?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<GqlResolversTypes['ID']>, ParentType, ContextType>;
  password?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  profilePicture?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<GqlResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlResolvers<ContextType = any> = {
  JSON?: GraphQLScalarType;
  Mutation?: GqlMutationResolvers<ContextType>;
  Ok?: GqlOkResolvers<ContextType>;
  Query?: GqlQueryResolvers<ContextType>;
  Subscription?: GqlSubscriptionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadFileResponse?: GqlUploadFileResponseResolvers<ContextType>;
  User?: GqlUserResolvers<ContextType>;
};

