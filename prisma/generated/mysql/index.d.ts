
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model OAuthToken
 * 
 */
export type OAuthToken = $Result.DefaultSelection<Prisma.$OAuthTokenPayload>
/**
 * Model Newsletter
 * 
 */
export type Newsletter = $Result.DefaultSelection<Prisma.$NewsletterPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model RetryQueue
 * 
 */
export type RetryQueue = $Result.DefaultSelection<Prisma.$RetryQueuePayload>
/**
 * Model NewsletterArchive
 * 
 */
export type NewsletterArchive = $Result.DefaultSelection<Prisma.$NewsletterArchivePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.oAuthToken`: Exposes CRUD operations for the **OAuthToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthTokens
    * const oAuthTokens = await prisma.oAuthToken.findMany()
    * ```
    */
  get oAuthToken(): Prisma.OAuthTokenDelegate<ExtArgs>;

  /**
   * `prisma.newsletter`: Exposes CRUD operations for the **Newsletter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Newsletters
    * const newsletters = await prisma.newsletter.findMany()
    * ```
    */
  get newsletter(): Prisma.NewsletterDelegate<ExtArgs>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs>;

  /**
   * `prisma.retryQueue`: Exposes CRUD operations for the **RetryQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RetryQueues
    * const retryQueues = await prisma.retryQueue.findMany()
    * ```
    */
  get retryQueue(): Prisma.RetryQueueDelegate<ExtArgs>;

  /**
   * `prisma.newsletterArchive`: Exposes CRUD operations for the **NewsletterArchive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsletterArchives
    * const newsletterArchives = await prisma.newsletterArchive.findMany()
    * ```
    */
  get newsletterArchive(): Prisma.NewsletterArchiveDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    OAuthToken: 'OAuthToken',
    Newsletter: 'Newsletter',
    Feedback: 'Feedback',
    RetryQueue: 'RetryQueue',
    NewsletterArchive: 'NewsletterArchive'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    mysql?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "oAuthToken" | "newsletter" | "feedback" | "retryQueue" | "newsletterArchive"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      OAuthToken: {
        payload: Prisma.$OAuthTokenPayload<ExtArgs>
        fields: Prisma.OAuthTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          findFirst: {
            args: Prisma.OAuthTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          findMany: {
            args: Prisma.OAuthTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>[]
          }
          create: {
            args: Prisma.OAuthTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          createMany: {
            args: Prisma.OAuthTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OAuthTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          update: {
            args: Prisma.OAuthTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          deleteMany: {
            args: Prisma.OAuthTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OAuthTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthTokenPayload>
          }
          aggregate: {
            args: Prisma.OAuthTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthToken>
          }
          groupBy: {
            args: Prisma.OAuthTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthTokenCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthTokenCountAggregateOutputType> | number
          }
        }
      }
      Newsletter: {
        payload: Prisma.$NewsletterPayload<ExtArgs>
        fields: Prisma.NewsletterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          findFirst: {
            args: Prisma.NewsletterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          findMany: {
            args: Prisma.NewsletterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>[]
          }
          create: {
            args: Prisma.NewsletterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          createMany: {
            args: Prisma.NewsletterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NewsletterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          update: {
            args: Prisma.NewsletterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsletterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          aggregate: {
            args: Prisma.NewsletterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletter>
          }
          groupBy: {
            args: Prisma.NewsletterGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      RetryQueue: {
        payload: Prisma.$RetryQueuePayload<ExtArgs>
        fields: Prisma.RetryQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RetryQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RetryQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryQueuePayload>
          }
          findFirst: {
            args: Prisma.RetryQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RetryQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryQueuePayload>
          }
          findMany: {
            args: Prisma.RetryQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryQueuePayload>[]
          }
          create: {
            args: Prisma.RetryQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryQueuePayload>
          }
          createMany: {
            args: Prisma.RetryQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RetryQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryQueuePayload>
          }
          update: {
            args: Prisma.RetryQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryQueuePayload>
          }
          deleteMany: {
            args: Prisma.RetryQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RetryQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RetryQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetryQueuePayload>
          }
          aggregate: {
            args: Prisma.RetryQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRetryQueue>
          }
          groupBy: {
            args: Prisma.RetryQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<RetryQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.RetryQueueCountArgs<ExtArgs>
            result: $Utils.Optional<RetryQueueCountAggregateOutputType> | number
          }
        }
      }
      NewsletterArchive: {
        payload: Prisma.$NewsletterArchivePayload<ExtArgs>
        fields: Prisma.NewsletterArchiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterArchiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterArchivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterArchiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterArchivePayload>
          }
          findFirst: {
            args: Prisma.NewsletterArchiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterArchivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterArchiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterArchivePayload>
          }
          findMany: {
            args: Prisma.NewsletterArchiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterArchivePayload>[]
          }
          create: {
            args: Prisma.NewsletterArchiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterArchivePayload>
          }
          createMany: {
            args: Prisma.NewsletterArchiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NewsletterArchiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterArchivePayload>
          }
          update: {
            args: Prisma.NewsletterArchiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterArchivePayload>
          }
          deleteMany: {
            args: Prisma.NewsletterArchiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterArchiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsletterArchiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterArchivePayload>
          }
          aggregate: {
            args: Prisma.NewsletterArchiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletterArchive>
          }
          groupBy: {
            args: Prisma.NewsletterArchiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterArchiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterArchiveCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterArchiveCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    OAuthTokens: number
    Newsletters: number
    Feedbacks: number
    RetryQueues: number
    NewsletterArchives: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OAuthTokens?: boolean | UserCountOutputTypeCountOAuthTokensArgs
    Newsletters?: boolean | UserCountOutputTypeCountNewslettersArgs
    Feedbacks?: boolean | UserCountOutputTypeCountFeedbacksArgs
    RetryQueues?: boolean | UserCountOutputTypeCountRetryQueuesArgs
    NewsletterArchives?: boolean | UserCountOutputTypeCountNewsletterArchivesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOAuthTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewslettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRetryQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RetryQueueWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsletterArchivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterArchiveWhereInput
  }


  /**
   * Count Type NewsletterCountOutputType
   */

  export type NewsletterCountOutputType = {
    Feedbacks: number
    Archives: number
  }

  export type NewsletterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Feedbacks?: boolean | NewsletterCountOutputTypeCountFeedbacksArgs
    Archives?: boolean | NewsletterCountOutputTypeCountArchivesArgs
  }

  // Custom InputTypes
  /**
   * NewsletterCountOutputType without action
   */
  export type NewsletterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterCountOutputType
     */
    select?: NewsletterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsletterCountOutputType without action
   */
  export type NewsletterCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * NewsletterCountOutputType without action
   */
  export type NewsletterCountOutputTypeCountArchivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterArchiveWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    profileImg: string | null
    timezone: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    profileImg: string | null
    timezone: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    profileImg: number
    interests: number
    timezone: number
    role: number
    notificationPreferences: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    profileImg?: true
    timezone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    profileImg?: true
    timezone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    profileImg?: true
    interests?: true
    timezone?: true
    role?: true
    notificationPreferences?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    username: string | null
    profileImg: string | null
    interests: JsonValue | null
    timezone: string
    role: string
    notificationPreferences: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    profileImg?: boolean
    interests?: boolean
    timezone?: boolean
    role?: boolean
    notificationPreferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    OAuthTokens?: boolean | User$OAuthTokensArgs<ExtArgs>
    Newsletters?: boolean | User$NewslettersArgs<ExtArgs>
    Feedbacks?: boolean | User$FeedbacksArgs<ExtArgs>
    RetryQueues?: boolean | User$RetryQueuesArgs<ExtArgs>
    NewsletterArchives?: boolean | User$NewsletterArchivesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    profileImg?: boolean
    interests?: boolean
    timezone?: boolean
    role?: boolean
    notificationPreferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OAuthTokens?: boolean | User$OAuthTokensArgs<ExtArgs>
    Newsletters?: boolean | User$NewslettersArgs<ExtArgs>
    Feedbacks?: boolean | User$FeedbacksArgs<ExtArgs>
    RetryQueues?: boolean | User$RetryQueuesArgs<ExtArgs>
    NewsletterArchives?: boolean | User$NewsletterArchivesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      OAuthTokens: Prisma.$OAuthTokenPayload<ExtArgs>[]
      Newsletters: Prisma.$NewsletterPayload<ExtArgs>[]
      Feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
      RetryQueues: Prisma.$RetryQueuePayload<ExtArgs>[]
      NewsletterArchives: Prisma.$NewsletterArchivePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      username: string | null
      profileImg: string | null
      interests: Prisma.JsonValue | null
      timezone: string
      role: string
      notificationPreferences: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OAuthTokens<T extends User$OAuthTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$OAuthTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findMany"> | Null>
    Newsletters<T extends User$NewslettersArgs<ExtArgs> = {}>(args?: Subset<T, User$NewslettersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findMany"> | Null>
    Feedbacks<T extends User$FeedbacksArgs<ExtArgs> = {}>(args?: Subset<T, User$FeedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany"> | Null>
    RetryQueues<T extends User$RetryQueuesArgs<ExtArgs> = {}>(args?: Subset<T, User$RetryQueuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetryQueuePayload<ExtArgs>, T, "findMany"> | Null>
    NewsletterArchives<T extends User$NewsletterArchivesArgs<ExtArgs> = {}>(args?: Subset<T, User$NewsletterArchivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterArchivePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly profileImg: FieldRef<"User", 'String'>
    readonly interests: FieldRef<"User", 'Json'>
    readonly timezone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly notificationPreferences: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.OAuthTokens
   */
  export type User$OAuthTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    where?: OAuthTokenWhereInput
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    cursor?: OAuthTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthTokenScalarFieldEnum | OAuthTokenScalarFieldEnum[]
  }

  /**
   * User.Newsletters
   */
  export type User$NewslettersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterInclude<ExtArgs> | null
    where?: NewsletterWhereInput
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    cursor?: NewsletterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsletterScalarFieldEnum | NewsletterScalarFieldEnum[]
  }

  /**
   * User.Feedbacks
   */
  export type User$FeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User.RetryQueues
   */
  export type User$RetryQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryQueue
     */
    select?: RetryQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetryQueueInclude<ExtArgs> | null
    where?: RetryQueueWhereInput
    orderBy?: RetryQueueOrderByWithRelationInput | RetryQueueOrderByWithRelationInput[]
    cursor?: RetryQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RetryQueueScalarFieldEnum | RetryQueueScalarFieldEnum[]
  }

  /**
   * User.NewsletterArchives
   */
  export type User$NewsletterArchivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
    where?: NewsletterArchiveWhereInput
    orderBy?: NewsletterArchiveOrderByWithRelationInput | NewsletterArchiveOrderByWithRelationInput[]
    cursor?: NewsletterArchiveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsletterArchiveScalarFieldEnum | NewsletterArchiveScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model OAuthToken
   */

  export type AggregateOAuthToken = {
    _count: OAuthTokenCountAggregateOutputType | null
    _avg: OAuthTokenAvgAggregateOutputType | null
    _sum: OAuthTokenSumAggregateOutputType | null
    _min: OAuthTokenMinAggregateOutputType | null
    _max: OAuthTokenMaxAggregateOutputType | null
  }

  export type OAuthTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type OAuthTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type OAuthTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OAuthTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OAuthTokenCountAggregateOutputType = {
    id: number
    userId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type OAuthTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type OAuthTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type OAuthTokenMinAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OAuthTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OAuthTokenCountAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type OAuthTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthToken to aggregate.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthTokens
    **/
    _count?: true | OAuthTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OAuthTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OAuthTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthTokenMaxAggregateInputType
  }

  export type GetOAuthTokenAggregateType<T extends OAuthTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthToken[P]>
      : GetScalarType<T[P], AggregateOAuthToken[P]>
  }




  export type OAuthTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthTokenWhereInput
    orderBy?: OAuthTokenOrderByWithAggregationInput | OAuthTokenOrderByWithAggregationInput[]
    by: OAuthTokenScalarFieldEnum[] | OAuthTokenScalarFieldEnum
    having?: OAuthTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthTokenCountAggregateInputType | true
    _avg?: OAuthTokenAvgAggregateInputType
    _sum?: OAuthTokenSumAggregateInputType
    _min?: OAuthTokenMinAggregateInputType
    _max?: OAuthTokenMaxAggregateInputType
  }

  export type OAuthTokenGroupByOutputType = {
    id: number
    userId: number
    accessToken: string
    refreshToken: string
    expiresAt: Date
    createdAt: Date
    _count: OAuthTokenCountAggregateOutputType | null
    _avg: OAuthTokenAvgAggregateOutputType | null
    _sum: OAuthTokenSumAggregateOutputType | null
    _min: OAuthTokenMinAggregateOutputType | null
    _max: OAuthTokenMaxAggregateOutputType | null
  }

  type GetOAuthTokenGroupByPayload<T extends OAuthTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthTokenGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthTokenGroupByOutputType[P]>
        }
      >
    >


  export type OAuthTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthToken"]>


  export type OAuthTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type OAuthTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OAuthTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      accessToken: string
      refreshToken: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["oAuthToken"]>
    composites: {}
  }

  type OAuthTokenGetPayload<S extends boolean | null | undefined | OAuthTokenDefaultArgs> = $Result.GetResult<Prisma.$OAuthTokenPayload, S>

  type OAuthTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OAuthTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OAuthTokenCountAggregateInputType | true
    }

  export interface OAuthTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthToken'], meta: { name: 'OAuthToken' } }
    /**
     * Find zero or one OAuthToken that matches the filter.
     * @param {OAuthTokenFindUniqueArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthTokenFindUniqueArgs>(args: SelectSubset<T, OAuthTokenFindUniqueArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OAuthToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OAuthTokenFindUniqueOrThrowArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OAuthToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenFindFirstArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthTokenFindFirstArgs>(args?: SelectSubset<T, OAuthTokenFindFirstArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OAuthToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenFindFirstOrThrowArgs} args - Arguments to find a OAuthToken
     * @example
     * // Get one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OAuthTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthTokens
     * const oAuthTokens = await prisma.oAuthToken.findMany()
     * 
     * // Get first 10 OAuthTokens
     * const oAuthTokens = await prisma.oAuthToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthTokenWithIdOnly = await prisma.oAuthToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthTokenFindManyArgs>(args?: SelectSubset<T, OAuthTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OAuthToken.
     * @param {OAuthTokenCreateArgs} args - Arguments to create a OAuthToken.
     * @example
     * // Create one OAuthToken
     * const OAuthToken = await prisma.oAuthToken.create({
     *   data: {
     *     // ... data to create a OAuthToken
     *   }
     * })
     * 
     */
    create<T extends OAuthTokenCreateArgs>(args: SelectSubset<T, OAuthTokenCreateArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OAuthTokens.
     * @param {OAuthTokenCreateManyArgs} args - Arguments to create many OAuthTokens.
     * @example
     * // Create many OAuthTokens
     * const oAuthToken = await prisma.oAuthToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthTokenCreateManyArgs>(args?: SelectSubset<T, OAuthTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OAuthToken.
     * @param {OAuthTokenDeleteArgs} args - Arguments to delete one OAuthToken.
     * @example
     * // Delete one OAuthToken
     * const OAuthToken = await prisma.oAuthToken.delete({
     *   where: {
     *     // ... filter to delete one OAuthToken
     *   }
     * })
     * 
     */
    delete<T extends OAuthTokenDeleteArgs>(args: SelectSubset<T, OAuthTokenDeleteArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OAuthToken.
     * @param {OAuthTokenUpdateArgs} args - Arguments to update one OAuthToken.
     * @example
     * // Update one OAuthToken
     * const oAuthToken = await prisma.oAuthToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthTokenUpdateArgs>(args: SelectSubset<T, OAuthTokenUpdateArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OAuthTokens.
     * @param {OAuthTokenDeleteManyArgs} args - Arguments to filter OAuthTokens to delete.
     * @example
     * // Delete a few OAuthTokens
     * const { count } = await prisma.oAuthToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthTokenDeleteManyArgs>(args?: SelectSubset<T, OAuthTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthTokens
     * const oAuthToken = await prisma.oAuthToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthTokenUpdateManyArgs>(args: SelectSubset<T, OAuthTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OAuthToken.
     * @param {OAuthTokenUpsertArgs} args - Arguments to update or create a OAuthToken.
     * @example
     * // Update or create a OAuthToken
     * const oAuthToken = await prisma.oAuthToken.upsert({
     *   create: {
     *     // ... data to create a OAuthToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthToken we want to update
     *   }
     * })
     */
    upsert<T extends OAuthTokenUpsertArgs>(args: SelectSubset<T, OAuthTokenUpsertArgs<ExtArgs>>): Prisma__OAuthTokenClient<$Result.GetResult<Prisma.$OAuthTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OAuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenCountArgs} args - Arguments to filter OAuthTokens to count.
     * @example
     * // Count the number of OAuthTokens
     * const count = await prisma.oAuthToken.count({
     *   where: {
     *     // ... the filter for the OAuthTokens we want to count
     *   }
     * })
    **/
    count<T extends OAuthTokenCountArgs>(
      args?: Subset<T, OAuthTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OAuthTokenAggregateArgs>(args: Subset<T, OAuthTokenAggregateArgs>): Prisma.PrismaPromise<GetOAuthTokenAggregateType<T>>

    /**
     * Group by OAuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OAuthTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthTokenGroupByArgs['orderBy'] }
        : { orderBy?: OAuthTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OAuthTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthToken model
   */
  readonly fields: OAuthTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OAuthToken model
   */ 
  interface OAuthTokenFieldRefs {
    readonly id: FieldRef<"OAuthToken", 'Int'>
    readonly userId: FieldRef<"OAuthToken", 'Int'>
    readonly accessToken: FieldRef<"OAuthToken", 'String'>
    readonly refreshToken: FieldRef<"OAuthToken", 'String'>
    readonly expiresAt: FieldRef<"OAuthToken", 'DateTime'>
    readonly createdAt: FieldRef<"OAuthToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OAuthToken findUnique
   */
  export type OAuthTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken findUniqueOrThrow
   */
  export type OAuthTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken findFirst
   */
  export type OAuthTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthTokens.
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthTokens.
     */
    distinct?: OAuthTokenScalarFieldEnum | OAuthTokenScalarFieldEnum[]
  }

  /**
   * OAuthToken findFirstOrThrow
   */
  export type OAuthTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthToken to fetch.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthTokens.
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthTokens.
     */
    distinct?: OAuthTokenScalarFieldEnum | OAuthTokenScalarFieldEnum[]
  }

  /**
   * OAuthToken findMany
   */
  export type OAuthTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthTokens to fetch.
     */
    where?: OAuthTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthTokens to fetch.
     */
    orderBy?: OAuthTokenOrderByWithRelationInput | OAuthTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthTokens.
     */
    cursor?: OAuthTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthTokens.
     */
    skip?: number
    distinct?: OAuthTokenScalarFieldEnum | OAuthTokenScalarFieldEnum[]
  }

  /**
   * OAuthToken create
   */
  export type OAuthTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a OAuthToken.
     */
    data: XOR<OAuthTokenCreateInput, OAuthTokenUncheckedCreateInput>
  }

  /**
   * OAuthToken createMany
   */
  export type OAuthTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthTokens.
     */
    data: OAuthTokenCreateManyInput | OAuthTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OAuthToken update
   */
  export type OAuthTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a OAuthToken.
     */
    data: XOR<OAuthTokenUpdateInput, OAuthTokenUncheckedUpdateInput>
    /**
     * Choose, which OAuthToken to update.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken updateMany
   */
  export type OAuthTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthTokens.
     */
    data: XOR<OAuthTokenUpdateManyMutationInput, OAuthTokenUncheckedUpdateManyInput>
    /**
     * Filter which OAuthTokens to update
     */
    where?: OAuthTokenWhereInput
  }

  /**
   * OAuthToken upsert
   */
  export type OAuthTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the OAuthToken to update in case it exists.
     */
    where: OAuthTokenWhereUniqueInput
    /**
     * In case the OAuthToken found by the `where` argument doesn't exist, create a new OAuthToken with this data.
     */
    create: XOR<OAuthTokenCreateInput, OAuthTokenUncheckedCreateInput>
    /**
     * In case the OAuthToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthTokenUpdateInput, OAuthTokenUncheckedUpdateInput>
  }

  /**
   * OAuthToken delete
   */
  export type OAuthTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
    /**
     * Filter which OAuthToken to delete.
     */
    where: OAuthTokenWhereUniqueInput
  }

  /**
   * OAuthToken deleteMany
   */
  export type OAuthTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthTokens to delete
     */
    where?: OAuthTokenWhereInput
  }

  /**
   * OAuthToken without action
   */
  export type OAuthTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthToken
     */
    select?: OAuthTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthTokenInclude<ExtArgs> | null
  }


  /**
   * Model Newsletter
   */

  export type AggregateNewsletter = {
    _count: NewsletterCountAggregateOutputType | null
    _avg: NewsletterAvgAggregateOutputType | null
    _sum: NewsletterSumAggregateOutputType | null
    _min: NewsletterMinAggregateOutputType | null
    _max: NewsletterMaxAggregateOutputType | null
  }

  export type NewsletterAvgAggregateOutputType = {
    id: number | null
    templateId: number | null
    userId: number | null
  }

  export type NewsletterSumAggregateOutputType = {
    id: number | null
    templateId: number | null
    userId: number | null
  }

  export type NewsletterMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    templateId: number | null
    frequency: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type NewsletterMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    templateId: number | null
    frequency: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type NewsletterCountAggregateOutputType = {
    id: number
    title: number
    content: number
    templateId: number
    frequency: number
    userId: number
    createdAt: number
    _all: number
  }


  export type NewsletterAvgAggregateInputType = {
    id?: true
    templateId?: true
    userId?: true
  }

  export type NewsletterSumAggregateInputType = {
    id?: true
    templateId?: true
    userId?: true
  }

  export type NewsletterMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    templateId?: true
    frequency?: true
    userId?: true
    createdAt?: true
  }

  export type NewsletterMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    templateId?: true
    frequency?: true
    userId?: true
    createdAt?: true
  }

  export type NewsletterCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    templateId?: true
    frequency?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type NewsletterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Newsletter to aggregate.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Newsletters
    **/
    _count?: true | NewsletterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsletterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsletterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterMaxAggregateInputType
  }

  export type GetNewsletterAggregateType<T extends NewsletterAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletter[P]>
      : GetScalarType<T[P], AggregateNewsletter[P]>
  }




  export type NewsletterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterWhereInput
    orderBy?: NewsletterOrderByWithAggregationInput | NewsletterOrderByWithAggregationInput[]
    by: NewsletterScalarFieldEnum[] | NewsletterScalarFieldEnum
    having?: NewsletterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterCountAggregateInputType | true
    _avg?: NewsletterAvgAggregateInputType
    _sum?: NewsletterSumAggregateInputType
    _min?: NewsletterMinAggregateInputType
    _max?: NewsletterMaxAggregateInputType
  }

  export type NewsletterGroupByOutputType = {
    id: number
    title: string
    content: string
    templateId: number | null
    frequency: string
    userId: number
    createdAt: Date
    _count: NewsletterCountAggregateOutputType | null
    _avg: NewsletterAvgAggregateOutputType | null
    _sum: NewsletterSumAggregateOutputType | null
    _min: NewsletterMinAggregateOutputType | null
    _max: NewsletterMaxAggregateOutputType | null
  }

  type GetNewsletterGroupByPayload<T extends NewsletterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    templateId?: boolean
    frequency?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Feedbacks?: boolean | Newsletter$FeedbacksArgs<ExtArgs>
    Archives?: boolean | Newsletter$ArchivesArgs<ExtArgs>
    _count?: boolean | NewsletterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsletter"]>


  export type NewsletterSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    templateId?: boolean
    frequency?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type NewsletterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Feedbacks?: boolean | Newsletter$FeedbacksArgs<ExtArgs>
    Archives?: boolean | Newsletter$ArchivesArgs<ExtArgs>
    _count?: boolean | NewsletterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NewsletterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Newsletter"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
      Archives: Prisma.$NewsletterArchivePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      templateId: number | null
      frequency: string
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["newsletter"]>
    composites: {}
  }

  type NewsletterGetPayload<S extends boolean | null | undefined | NewsletterDefaultArgs> = $Result.GetResult<Prisma.$NewsletterPayload, S>

  type NewsletterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsletterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsletterCountAggregateInputType | true
    }

  export interface NewsletterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Newsletter'], meta: { name: 'Newsletter' } }
    /**
     * Find zero or one Newsletter that matches the filter.
     * @param {NewsletterFindUniqueArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterFindUniqueArgs>(args: SelectSubset<T, NewsletterFindUniqueArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Newsletter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsletterFindUniqueOrThrowArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Newsletter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterFindFirstArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterFindFirstArgs>(args?: SelectSubset<T, NewsletterFindFirstArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Newsletter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterFindFirstOrThrowArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Newsletters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Newsletters
     * const newsletters = await prisma.newsletter.findMany()
     * 
     * // Get first 10 Newsletters
     * const newsletters = await prisma.newsletter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterWithIdOnly = await prisma.newsletter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterFindManyArgs>(args?: SelectSubset<T, NewsletterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Newsletter.
     * @param {NewsletterCreateArgs} args - Arguments to create a Newsletter.
     * @example
     * // Create one Newsletter
     * const Newsletter = await prisma.newsletter.create({
     *   data: {
     *     // ... data to create a Newsletter
     *   }
     * })
     * 
     */
    create<T extends NewsletterCreateArgs>(args: SelectSubset<T, NewsletterCreateArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Newsletters.
     * @param {NewsletterCreateManyArgs} args - Arguments to create many Newsletters.
     * @example
     * // Create many Newsletters
     * const newsletter = await prisma.newsletter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterCreateManyArgs>(args?: SelectSubset<T, NewsletterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Newsletter.
     * @param {NewsletterDeleteArgs} args - Arguments to delete one Newsletter.
     * @example
     * // Delete one Newsletter
     * const Newsletter = await prisma.newsletter.delete({
     *   where: {
     *     // ... filter to delete one Newsletter
     *   }
     * })
     * 
     */
    delete<T extends NewsletterDeleteArgs>(args: SelectSubset<T, NewsletterDeleteArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Newsletter.
     * @param {NewsletterUpdateArgs} args - Arguments to update one Newsletter.
     * @example
     * // Update one Newsletter
     * const newsletter = await prisma.newsletter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterUpdateArgs>(args: SelectSubset<T, NewsletterUpdateArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Newsletters.
     * @param {NewsletterDeleteManyArgs} args - Arguments to filter Newsletters to delete.
     * @example
     * // Delete a few Newsletters
     * const { count } = await prisma.newsletter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterDeleteManyArgs>(args?: SelectSubset<T, NewsletterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newsletters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Newsletters
     * const newsletter = await prisma.newsletter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterUpdateManyArgs>(args: SelectSubset<T, NewsletterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Newsletter.
     * @param {NewsletterUpsertArgs} args - Arguments to update or create a Newsletter.
     * @example
     * // Update or create a Newsletter
     * const newsletter = await prisma.newsletter.upsert({
     *   create: {
     *     // ... data to create a Newsletter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Newsletter we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterUpsertArgs>(args: SelectSubset<T, NewsletterUpsertArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Newsletters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterCountArgs} args - Arguments to filter Newsletters to count.
     * @example
     * // Count the number of Newsletters
     * const count = await prisma.newsletter.count({
     *   where: {
     *     // ... the filter for the Newsletters we want to count
     *   }
     * })
    **/
    count<T extends NewsletterCountArgs>(
      args?: Subset<T, NewsletterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Newsletter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsletterAggregateArgs>(args: Subset<T, NewsletterAggregateArgs>): Prisma.PrismaPromise<GetNewsletterAggregateType<T>>

    /**
     * Group by Newsletter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsletterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsletterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Newsletter model
   */
  readonly fields: NewsletterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Newsletter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Feedbacks<T extends Newsletter$FeedbacksArgs<ExtArgs> = {}>(args?: Subset<T, Newsletter$FeedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany"> | Null>
    Archives<T extends Newsletter$ArchivesArgs<ExtArgs> = {}>(args?: Subset<T, Newsletter$ArchivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterArchivePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Newsletter model
   */ 
  interface NewsletterFieldRefs {
    readonly id: FieldRef<"Newsletter", 'Int'>
    readonly title: FieldRef<"Newsletter", 'String'>
    readonly content: FieldRef<"Newsletter", 'String'>
    readonly templateId: FieldRef<"Newsletter", 'Int'>
    readonly frequency: FieldRef<"Newsletter", 'String'>
    readonly userId: FieldRef<"Newsletter", 'Int'>
    readonly createdAt: FieldRef<"Newsletter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Newsletter findUnique
   */
  export type NewsletterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterInclude<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter findUniqueOrThrow
   */
  export type NewsletterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterInclude<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter findFirst
   */
  export type NewsletterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterInclude<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Newsletters.
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newsletters.
     */
    distinct?: NewsletterScalarFieldEnum | NewsletterScalarFieldEnum[]
  }

  /**
   * Newsletter findFirstOrThrow
   */
  export type NewsletterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterInclude<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Newsletters.
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newsletters.
     */
    distinct?: NewsletterScalarFieldEnum | NewsletterScalarFieldEnum[]
  }

  /**
   * Newsletter findMany
   */
  export type NewsletterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterInclude<ExtArgs> | null
    /**
     * Filter, which Newsletters to fetch.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Newsletters.
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    distinct?: NewsletterScalarFieldEnum | NewsletterScalarFieldEnum[]
  }

  /**
   * Newsletter create
   */
  export type NewsletterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterInclude<ExtArgs> | null
    /**
     * The data needed to create a Newsletter.
     */
    data: XOR<NewsletterCreateInput, NewsletterUncheckedCreateInput>
  }

  /**
   * Newsletter createMany
   */
  export type NewsletterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Newsletters.
     */
    data: NewsletterCreateManyInput | NewsletterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Newsletter update
   */
  export type NewsletterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterInclude<ExtArgs> | null
    /**
     * The data needed to update a Newsletter.
     */
    data: XOR<NewsletterUpdateInput, NewsletterUncheckedUpdateInput>
    /**
     * Choose, which Newsletter to update.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter updateMany
   */
  export type NewsletterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Newsletters.
     */
    data: XOR<NewsletterUpdateManyMutationInput, NewsletterUncheckedUpdateManyInput>
    /**
     * Filter which Newsletters to update
     */
    where?: NewsletterWhereInput
  }

  /**
   * Newsletter upsert
   */
  export type NewsletterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterInclude<ExtArgs> | null
    /**
     * The filter to search for the Newsletter to update in case it exists.
     */
    where: NewsletterWhereUniqueInput
    /**
     * In case the Newsletter found by the `where` argument doesn't exist, create a new Newsletter with this data.
     */
    create: XOR<NewsletterCreateInput, NewsletterUncheckedCreateInput>
    /**
     * In case the Newsletter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterUpdateInput, NewsletterUncheckedUpdateInput>
  }

  /**
   * Newsletter delete
   */
  export type NewsletterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterInclude<ExtArgs> | null
    /**
     * Filter which Newsletter to delete.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter deleteMany
   */
  export type NewsletterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Newsletters to delete
     */
    where?: NewsletterWhereInput
  }

  /**
   * Newsletter.Feedbacks
   */
  export type Newsletter$FeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Newsletter.Archives
   */
  export type Newsletter$ArchivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
    where?: NewsletterArchiveWhereInput
    orderBy?: NewsletterArchiveOrderByWithRelationInput | NewsletterArchiveOrderByWithRelationInput[]
    cursor?: NewsletterArchiveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsletterArchiveScalarFieldEnum | NewsletterArchiveScalarFieldEnum[]
  }

  /**
   * Newsletter without action
   */
  export type NewsletterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    newsletterId: number | null
    rating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    userId: number | null
    newsletterId: number | null
    rating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    userId: number | null
    newsletterId: number | null
    rating: number | null
    comments: string | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    newsletterId: number | null
    rating: number | null
    comments: string | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    userId: number
    newsletterId: number
    rating: number
    comments: number
    createdAt: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    userId?: true
    newsletterId?: true
    rating?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    userId?: true
    newsletterId?: true
    rating?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    userId?: true
    newsletterId?: true
    rating?: true
    comments?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    userId?: true
    newsletterId?: true
    rating?: true
    comments?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    userId?: true
    newsletterId?: true
    rating?: true
    comments?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    userId: number
    newsletterId: number
    rating: number
    comments: string | null
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    newsletterId?: boolean
    rating?: boolean
    comments?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    newsletter?: boolean | NewsletterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>


  export type FeedbackSelectScalar = {
    id?: boolean
    userId?: boolean
    newsletterId?: boolean
    rating?: boolean
    comments?: boolean
    createdAt?: boolean
  }

  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    newsletter?: boolean | NewsletterDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      newsletter: Prisma.$NewsletterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      newsletterId: number
      rating: number
      comments: string | null
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    newsletter<T extends NewsletterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsletterDefaultArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */ 
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly userId: FieldRef<"Feedback", 'Int'>
    readonly newsletterId: FieldRef<"Feedback", 'Int'>
    readonly rating: FieldRef<"Feedback", 'Int'>
    readonly comments: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model RetryQueue
   */

  export type AggregateRetryQueue = {
    _count: RetryQueueCountAggregateOutputType | null
    _avg: RetryQueueAvgAggregateOutputType | null
    _sum: RetryQueueSumAggregateOutputType | null
    _min: RetryQueueMinAggregateOutputType | null
    _max: RetryQueueMaxAggregateOutputType | null
  }

  export type RetryQueueAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RetryQueueSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RetryQueueMinAggregateOutputType = {
    id: number | null
    userId: number | null
    email: string | null
    status: string | null
    createdAt: Date | null
  }

  export type RetryQueueMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    email: string | null
    status: string | null
    createdAt: Date | null
  }

  export type RetryQueueCountAggregateOutputType = {
    id: number
    userId: number
    email: number
    status: number
    createdAt: number
    _all: number
  }


  export type RetryQueueAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RetryQueueSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RetryQueueMinAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    status?: true
    createdAt?: true
  }

  export type RetryQueueMaxAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    status?: true
    createdAt?: true
  }

  export type RetryQueueCountAggregateInputType = {
    id?: true
    userId?: true
    email?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type RetryQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RetryQueue to aggregate.
     */
    where?: RetryQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RetryQueues to fetch.
     */
    orderBy?: RetryQueueOrderByWithRelationInput | RetryQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RetryQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RetryQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RetryQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RetryQueues
    **/
    _count?: true | RetryQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RetryQueueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RetryQueueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RetryQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RetryQueueMaxAggregateInputType
  }

  export type GetRetryQueueAggregateType<T extends RetryQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateRetryQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRetryQueue[P]>
      : GetScalarType<T[P], AggregateRetryQueue[P]>
  }




  export type RetryQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RetryQueueWhereInput
    orderBy?: RetryQueueOrderByWithAggregationInput | RetryQueueOrderByWithAggregationInput[]
    by: RetryQueueScalarFieldEnum[] | RetryQueueScalarFieldEnum
    having?: RetryQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RetryQueueCountAggregateInputType | true
    _avg?: RetryQueueAvgAggregateInputType
    _sum?: RetryQueueSumAggregateInputType
    _min?: RetryQueueMinAggregateInputType
    _max?: RetryQueueMaxAggregateInputType
  }

  export type RetryQueueGroupByOutputType = {
    id: number
    userId: number | null
    email: string
    status: string
    createdAt: Date
    _count: RetryQueueCountAggregateOutputType | null
    _avg: RetryQueueAvgAggregateOutputType | null
    _sum: RetryQueueSumAggregateOutputType | null
    _min: RetryQueueMinAggregateOutputType | null
    _max: RetryQueueMaxAggregateOutputType | null
  }

  type GetRetryQueueGroupByPayload<T extends RetryQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RetryQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RetryQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RetryQueueGroupByOutputType[P]>
            : GetScalarType<T[P], RetryQueueGroupByOutputType[P]>
        }
      >
    >


  export type RetryQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    email?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | RetryQueue$userArgs<ExtArgs>
  }, ExtArgs["result"]["retryQueue"]>


  export type RetryQueueSelectScalar = {
    id?: boolean
    userId?: boolean
    email?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type RetryQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RetryQueue$userArgs<ExtArgs>
  }

  export type $RetryQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RetryQueue"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      email: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["retryQueue"]>
    composites: {}
  }

  type RetryQueueGetPayload<S extends boolean | null | undefined | RetryQueueDefaultArgs> = $Result.GetResult<Prisma.$RetryQueuePayload, S>

  type RetryQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RetryQueueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RetryQueueCountAggregateInputType | true
    }

  export interface RetryQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RetryQueue'], meta: { name: 'RetryQueue' } }
    /**
     * Find zero or one RetryQueue that matches the filter.
     * @param {RetryQueueFindUniqueArgs} args - Arguments to find a RetryQueue
     * @example
     * // Get one RetryQueue
     * const retryQueue = await prisma.retryQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RetryQueueFindUniqueArgs>(args: SelectSubset<T, RetryQueueFindUniqueArgs<ExtArgs>>): Prisma__RetryQueueClient<$Result.GetResult<Prisma.$RetryQueuePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RetryQueue that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RetryQueueFindUniqueOrThrowArgs} args - Arguments to find a RetryQueue
     * @example
     * // Get one RetryQueue
     * const retryQueue = await prisma.retryQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RetryQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, RetryQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RetryQueueClient<$Result.GetResult<Prisma.$RetryQueuePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RetryQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryQueueFindFirstArgs} args - Arguments to find a RetryQueue
     * @example
     * // Get one RetryQueue
     * const retryQueue = await prisma.retryQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RetryQueueFindFirstArgs>(args?: SelectSubset<T, RetryQueueFindFirstArgs<ExtArgs>>): Prisma__RetryQueueClient<$Result.GetResult<Prisma.$RetryQueuePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RetryQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryQueueFindFirstOrThrowArgs} args - Arguments to find a RetryQueue
     * @example
     * // Get one RetryQueue
     * const retryQueue = await prisma.retryQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RetryQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, RetryQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__RetryQueueClient<$Result.GetResult<Prisma.$RetryQueuePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RetryQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RetryQueues
     * const retryQueues = await prisma.retryQueue.findMany()
     * 
     * // Get first 10 RetryQueues
     * const retryQueues = await prisma.retryQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const retryQueueWithIdOnly = await prisma.retryQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RetryQueueFindManyArgs>(args?: SelectSubset<T, RetryQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetryQueuePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RetryQueue.
     * @param {RetryQueueCreateArgs} args - Arguments to create a RetryQueue.
     * @example
     * // Create one RetryQueue
     * const RetryQueue = await prisma.retryQueue.create({
     *   data: {
     *     // ... data to create a RetryQueue
     *   }
     * })
     * 
     */
    create<T extends RetryQueueCreateArgs>(args: SelectSubset<T, RetryQueueCreateArgs<ExtArgs>>): Prisma__RetryQueueClient<$Result.GetResult<Prisma.$RetryQueuePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RetryQueues.
     * @param {RetryQueueCreateManyArgs} args - Arguments to create many RetryQueues.
     * @example
     * // Create many RetryQueues
     * const retryQueue = await prisma.retryQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RetryQueueCreateManyArgs>(args?: SelectSubset<T, RetryQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RetryQueue.
     * @param {RetryQueueDeleteArgs} args - Arguments to delete one RetryQueue.
     * @example
     * // Delete one RetryQueue
     * const RetryQueue = await prisma.retryQueue.delete({
     *   where: {
     *     // ... filter to delete one RetryQueue
     *   }
     * })
     * 
     */
    delete<T extends RetryQueueDeleteArgs>(args: SelectSubset<T, RetryQueueDeleteArgs<ExtArgs>>): Prisma__RetryQueueClient<$Result.GetResult<Prisma.$RetryQueuePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RetryQueue.
     * @param {RetryQueueUpdateArgs} args - Arguments to update one RetryQueue.
     * @example
     * // Update one RetryQueue
     * const retryQueue = await prisma.retryQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RetryQueueUpdateArgs>(args: SelectSubset<T, RetryQueueUpdateArgs<ExtArgs>>): Prisma__RetryQueueClient<$Result.GetResult<Prisma.$RetryQueuePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RetryQueues.
     * @param {RetryQueueDeleteManyArgs} args - Arguments to filter RetryQueues to delete.
     * @example
     * // Delete a few RetryQueues
     * const { count } = await prisma.retryQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RetryQueueDeleteManyArgs>(args?: SelectSubset<T, RetryQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RetryQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RetryQueues
     * const retryQueue = await prisma.retryQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RetryQueueUpdateManyArgs>(args: SelectSubset<T, RetryQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RetryQueue.
     * @param {RetryQueueUpsertArgs} args - Arguments to update or create a RetryQueue.
     * @example
     * // Update or create a RetryQueue
     * const retryQueue = await prisma.retryQueue.upsert({
     *   create: {
     *     // ... data to create a RetryQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RetryQueue we want to update
     *   }
     * })
     */
    upsert<T extends RetryQueueUpsertArgs>(args: SelectSubset<T, RetryQueueUpsertArgs<ExtArgs>>): Prisma__RetryQueueClient<$Result.GetResult<Prisma.$RetryQueuePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RetryQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryQueueCountArgs} args - Arguments to filter RetryQueues to count.
     * @example
     * // Count the number of RetryQueues
     * const count = await prisma.retryQueue.count({
     *   where: {
     *     // ... the filter for the RetryQueues we want to count
     *   }
     * })
    **/
    count<T extends RetryQueueCountArgs>(
      args?: Subset<T, RetryQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RetryQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RetryQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RetryQueueAggregateArgs>(args: Subset<T, RetryQueueAggregateArgs>): Prisma.PrismaPromise<GetRetryQueueAggregateType<T>>

    /**
     * Group by RetryQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetryQueueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RetryQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RetryQueueGroupByArgs['orderBy'] }
        : { orderBy?: RetryQueueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RetryQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRetryQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RetryQueue model
   */
  readonly fields: RetryQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RetryQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RetryQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends RetryQueue$userArgs<ExtArgs> = {}>(args?: Subset<T, RetryQueue$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RetryQueue model
   */ 
  interface RetryQueueFieldRefs {
    readonly id: FieldRef<"RetryQueue", 'Int'>
    readonly userId: FieldRef<"RetryQueue", 'Int'>
    readonly email: FieldRef<"RetryQueue", 'String'>
    readonly status: FieldRef<"RetryQueue", 'String'>
    readonly createdAt: FieldRef<"RetryQueue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RetryQueue findUnique
   */
  export type RetryQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryQueue
     */
    select?: RetryQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetryQueueInclude<ExtArgs> | null
    /**
     * Filter, which RetryQueue to fetch.
     */
    where: RetryQueueWhereUniqueInput
  }

  /**
   * RetryQueue findUniqueOrThrow
   */
  export type RetryQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryQueue
     */
    select?: RetryQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetryQueueInclude<ExtArgs> | null
    /**
     * Filter, which RetryQueue to fetch.
     */
    where: RetryQueueWhereUniqueInput
  }

  /**
   * RetryQueue findFirst
   */
  export type RetryQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryQueue
     */
    select?: RetryQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetryQueueInclude<ExtArgs> | null
    /**
     * Filter, which RetryQueue to fetch.
     */
    where?: RetryQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RetryQueues to fetch.
     */
    orderBy?: RetryQueueOrderByWithRelationInput | RetryQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RetryQueues.
     */
    cursor?: RetryQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RetryQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RetryQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RetryQueues.
     */
    distinct?: RetryQueueScalarFieldEnum | RetryQueueScalarFieldEnum[]
  }

  /**
   * RetryQueue findFirstOrThrow
   */
  export type RetryQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryQueue
     */
    select?: RetryQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetryQueueInclude<ExtArgs> | null
    /**
     * Filter, which RetryQueue to fetch.
     */
    where?: RetryQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RetryQueues to fetch.
     */
    orderBy?: RetryQueueOrderByWithRelationInput | RetryQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RetryQueues.
     */
    cursor?: RetryQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RetryQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RetryQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RetryQueues.
     */
    distinct?: RetryQueueScalarFieldEnum | RetryQueueScalarFieldEnum[]
  }

  /**
   * RetryQueue findMany
   */
  export type RetryQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryQueue
     */
    select?: RetryQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetryQueueInclude<ExtArgs> | null
    /**
     * Filter, which RetryQueues to fetch.
     */
    where?: RetryQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RetryQueues to fetch.
     */
    orderBy?: RetryQueueOrderByWithRelationInput | RetryQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RetryQueues.
     */
    cursor?: RetryQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RetryQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RetryQueues.
     */
    skip?: number
    distinct?: RetryQueueScalarFieldEnum | RetryQueueScalarFieldEnum[]
  }

  /**
   * RetryQueue create
   */
  export type RetryQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryQueue
     */
    select?: RetryQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetryQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a RetryQueue.
     */
    data: XOR<RetryQueueCreateInput, RetryQueueUncheckedCreateInput>
  }

  /**
   * RetryQueue createMany
   */
  export type RetryQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RetryQueues.
     */
    data: RetryQueueCreateManyInput | RetryQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RetryQueue update
   */
  export type RetryQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryQueue
     */
    select?: RetryQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetryQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a RetryQueue.
     */
    data: XOR<RetryQueueUpdateInput, RetryQueueUncheckedUpdateInput>
    /**
     * Choose, which RetryQueue to update.
     */
    where: RetryQueueWhereUniqueInput
  }

  /**
   * RetryQueue updateMany
   */
  export type RetryQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RetryQueues.
     */
    data: XOR<RetryQueueUpdateManyMutationInput, RetryQueueUncheckedUpdateManyInput>
    /**
     * Filter which RetryQueues to update
     */
    where?: RetryQueueWhereInput
  }

  /**
   * RetryQueue upsert
   */
  export type RetryQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryQueue
     */
    select?: RetryQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetryQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the RetryQueue to update in case it exists.
     */
    where: RetryQueueWhereUniqueInput
    /**
     * In case the RetryQueue found by the `where` argument doesn't exist, create a new RetryQueue with this data.
     */
    create: XOR<RetryQueueCreateInput, RetryQueueUncheckedCreateInput>
    /**
     * In case the RetryQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RetryQueueUpdateInput, RetryQueueUncheckedUpdateInput>
  }

  /**
   * RetryQueue delete
   */
  export type RetryQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryQueue
     */
    select?: RetryQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetryQueueInclude<ExtArgs> | null
    /**
     * Filter which RetryQueue to delete.
     */
    where: RetryQueueWhereUniqueInput
  }

  /**
   * RetryQueue deleteMany
   */
  export type RetryQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RetryQueues to delete
     */
    where?: RetryQueueWhereInput
  }

  /**
   * RetryQueue.user
   */
  export type RetryQueue$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RetryQueue without action
   */
  export type RetryQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetryQueue
     */
    select?: RetryQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetryQueueInclude<ExtArgs> | null
  }


  /**
   * Model NewsletterArchive
   */

  export type AggregateNewsletterArchive = {
    _count: NewsletterArchiveCountAggregateOutputType | null
    _avg: NewsletterArchiveAvgAggregateOutputType | null
    _sum: NewsletterArchiveSumAggregateOutputType | null
    _min: NewsletterArchiveMinAggregateOutputType | null
    _max: NewsletterArchiveMaxAggregateOutputType | null
  }

  export type NewsletterArchiveAvgAggregateOutputType = {
    id: number | null
    newsletterId: number | null
    userId: number | null
  }

  export type NewsletterArchiveSumAggregateOutputType = {
    id: number | null
    newsletterId: number | null
    userId: number | null
  }

  export type NewsletterArchiveMinAggregateOutputType = {
    id: number | null
    newsletterId: number | null
    userId: number | null
    sentAt: Date | null
    archiveDate: Date | null
  }

  export type NewsletterArchiveMaxAggregateOutputType = {
    id: number | null
    newsletterId: number | null
    userId: number | null
    sentAt: Date | null
    archiveDate: Date | null
  }

  export type NewsletterArchiveCountAggregateOutputType = {
    id: number
    newsletterId: number
    userId: number
    sentAt: number
    archiveDate: number
    _all: number
  }


  export type NewsletterArchiveAvgAggregateInputType = {
    id?: true
    newsletterId?: true
    userId?: true
  }

  export type NewsletterArchiveSumAggregateInputType = {
    id?: true
    newsletterId?: true
    userId?: true
  }

  export type NewsletterArchiveMinAggregateInputType = {
    id?: true
    newsletterId?: true
    userId?: true
    sentAt?: true
    archiveDate?: true
  }

  export type NewsletterArchiveMaxAggregateInputType = {
    id?: true
    newsletterId?: true
    userId?: true
    sentAt?: true
    archiveDate?: true
  }

  export type NewsletterArchiveCountAggregateInputType = {
    id?: true
    newsletterId?: true
    userId?: true
    sentAt?: true
    archiveDate?: true
    _all?: true
  }

  export type NewsletterArchiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterArchive to aggregate.
     */
    where?: NewsletterArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterArchives to fetch.
     */
    orderBy?: NewsletterArchiveOrderByWithRelationInput | NewsletterArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsletterArchives
    **/
    _count?: true | NewsletterArchiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsletterArchiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsletterArchiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterArchiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterArchiveMaxAggregateInputType
  }

  export type GetNewsletterArchiveAggregateType<T extends NewsletterArchiveAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletterArchive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletterArchive[P]>
      : GetScalarType<T[P], AggregateNewsletterArchive[P]>
  }




  export type NewsletterArchiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterArchiveWhereInput
    orderBy?: NewsletterArchiveOrderByWithAggregationInput | NewsletterArchiveOrderByWithAggregationInput[]
    by: NewsletterArchiveScalarFieldEnum[] | NewsletterArchiveScalarFieldEnum
    having?: NewsletterArchiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterArchiveCountAggregateInputType | true
    _avg?: NewsletterArchiveAvgAggregateInputType
    _sum?: NewsletterArchiveSumAggregateInputType
    _min?: NewsletterArchiveMinAggregateInputType
    _max?: NewsletterArchiveMaxAggregateInputType
  }

  export type NewsletterArchiveGroupByOutputType = {
    id: number
    newsletterId: number
    userId: number
    sentAt: Date
    archiveDate: Date
    _count: NewsletterArchiveCountAggregateOutputType | null
    _avg: NewsletterArchiveAvgAggregateOutputType | null
    _sum: NewsletterArchiveSumAggregateOutputType | null
    _min: NewsletterArchiveMinAggregateOutputType | null
    _max: NewsletterArchiveMaxAggregateOutputType | null
  }

  type GetNewsletterArchiveGroupByPayload<T extends NewsletterArchiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterArchiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterArchiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterArchiveGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterArchiveGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterArchiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    newsletterId?: boolean
    userId?: boolean
    sentAt?: boolean
    archiveDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    newsletter?: boolean | NewsletterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsletterArchive"]>


  export type NewsletterArchiveSelectScalar = {
    id?: boolean
    newsletterId?: boolean
    userId?: boolean
    sentAt?: boolean
    archiveDate?: boolean
  }

  export type NewsletterArchiveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    newsletter?: boolean | NewsletterDefaultArgs<ExtArgs>
  }

  export type $NewsletterArchivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsletterArchive"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      newsletter: Prisma.$NewsletterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      newsletterId: number
      userId: number
      sentAt: Date
      archiveDate: Date
    }, ExtArgs["result"]["newsletterArchive"]>
    composites: {}
  }

  type NewsletterArchiveGetPayload<S extends boolean | null | undefined | NewsletterArchiveDefaultArgs> = $Result.GetResult<Prisma.$NewsletterArchivePayload, S>

  type NewsletterArchiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsletterArchiveFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsletterArchiveCountAggregateInputType | true
    }

  export interface NewsletterArchiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsletterArchive'], meta: { name: 'NewsletterArchive' } }
    /**
     * Find zero or one NewsletterArchive that matches the filter.
     * @param {NewsletterArchiveFindUniqueArgs} args - Arguments to find a NewsletterArchive
     * @example
     * // Get one NewsletterArchive
     * const newsletterArchive = await prisma.newsletterArchive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterArchiveFindUniqueArgs>(args: SelectSubset<T, NewsletterArchiveFindUniqueArgs<ExtArgs>>): Prisma__NewsletterArchiveClient<$Result.GetResult<Prisma.$NewsletterArchivePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NewsletterArchive that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsletterArchiveFindUniqueOrThrowArgs} args - Arguments to find a NewsletterArchive
     * @example
     * // Get one NewsletterArchive
     * const newsletterArchive = await prisma.newsletterArchive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterArchiveFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterArchiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterArchiveClient<$Result.GetResult<Prisma.$NewsletterArchivePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NewsletterArchive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterArchiveFindFirstArgs} args - Arguments to find a NewsletterArchive
     * @example
     * // Get one NewsletterArchive
     * const newsletterArchive = await prisma.newsletterArchive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterArchiveFindFirstArgs>(args?: SelectSubset<T, NewsletterArchiveFindFirstArgs<ExtArgs>>): Prisma__NewsletterArchiveClient<$Result.GetResult<Prisma.$NewsletterArchivePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NewsletterArchive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterArchiveFindFirstOrThrowArgs} args - Arguments to find a NewsletterArchive
     * @example
     * // Get one NewsletterArchive
     * const newsletterArchive = await prisma.newsletterArchive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterArchiveFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterArchiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterArchiveClient<$Result.GetResult<Prisma.$NewsletterArchivePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NewsletterArchives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterArchiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsletterArchives
     * const newsletterArchives = await prisma.newsletterArchive.findMany()
     * 
     * // Get first 10 NewsletterArchives
     * const newsletterArchives = await prisma.newsletterArchive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterArchiveWithIdOnly = await prisma.newsletterArchive.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterArchiveFindManyArgs>(args?: SelectSubset<T, NewsletterArchiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterArchivePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NewsletterArchive.
     * @param {NewsletterArchiveCreateArgs} args - Arguments to create a NewsletterArchive.
     * @example
     * // Create one NewsletterArchive
     * const NewsletterArchive = await prisma.newsletterArchive.create({
     *   data: {
     *     // ... data to create a NewsletterArchive
     *   }
     * })
     * 
     */
    create<T extends NewsletterArchiveCreateArgs>(args: SelectSubset<T, NewsletterArchiveCreateArgs<ExtArgs>>): Prisma__NewsletterArchiveClient<$Result.GetResult<Prisma.$NewsletterArchivePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NewsletterArchives.
     * @param {NewsletterArchiveCreateManyArgs} args - Arguments to create many NewsletterArchives.
     * @example
     * // Create many NewsletterArchives
     * const newsletterArchive = await prisma.newsletterArchive.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterArchiveCreateManyArgs>(args?: SelectSubset<T, NewsletterArchiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NewsletterArchive.
     * @param {NewsletterArchiveDeleteArgs} args - Arguments to delete one NewsletterArchive.
     * @example
     * // Delete one NewsletterArchive
     * const NewsletterArchive = await prisma.newsletterArchive.delete({
     *   where: {
     *     // ... filter to delete one NewsletterArchive
     *   }
     * })
     * 
     */
    delete<T extends NewsletterArchiveDeleteArgs>(args: SelectSubset<T, NewsletterArchiveDeleteArgs<ExtArgs>>): Prisma__NewsletterArchiveClient<$Result.GetResult<Prisma.$NewsletterArchivePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NewsletterArchive.
     * @param {NewsletterArchiveUpdateArgs} args - Arguments to update one NewsletterArchive.
     * @example
     * // Update one NewsletterArchive
     * const newsletterArchive = await prisma.newsletterArchive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterArchiveUpdateArgs>(args: SelectSubset<T, NewsletterArchiveUpdateArgs<ExtArgs>>): Prisma__NewsletterArchiveClient<$Result.GetResult<Prisma.$NewsletterArchivePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NewsletterArchives.
     * @param {NewsletterArchiveDeleteManyArgs} args - Arguments to filter NewsletterArchives to delete.
     * @example
     * // Delete a few NewsletterArchives
     * const { count } = await prisma.newsletterArchive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterArchiveDeleteManyArgs>(args?: SelectSubset<T, NewsletterArchiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterArchives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterArchiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsletterArchives
     * const newsletterArchive = await prisma.newsletterArchive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterArchiveUpdateManyArgs>(args: SelectSubset<T, NewsletterArchiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsletterArchive.
     * @param {NewsletterArchiveUpsertArgs} args - Arguments to update or create a NewsletterArchive.
     * @example
     * // Update or create a NewsletterArchive
     * const newsletterArchive = await prisma.newsletterArchive.upsert({
     *   create: {
     *     // ... data to create a NewsletterArchive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsletterArchive we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterArchiveUpsertArgs>(args: SelectSubset<T, NewsletterArchiveUpsertArgs<ExtArgs>>): Prisma__NewsletterArchiveClient<$Result.GetResult<Prisma.$NewsletterArchivePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NewsletterArchives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterArchiveCountArgs} args - Arguments to filter NewsletterArchives to count.
     * @example
     * // Count the number of NewsletterArchives
     * const count = await prisma.newsletterArchive.count({
     *   where: {
     *     // ... the filter for the NewsletterArchives we want to count
     *   }
     * })
    **/
    count<T extends NewsletterArchiveCountArgs>(
      args?: Subset<T, NewsletterArchiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterArchiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsletterArchive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterArchiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsletterArchiveAggregateArgs>(args: Subset<T, NewsletterArchiveAggregateArgs>): Prisma.PrismaPromise<GetNewsletterArchiveAggregateType<T>>

    /**
     * Group by NewsletterArchive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterArchiveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsletterArchiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterArchiveGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterArchiveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsletterArchiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterArchiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsletterArchive model
   */
  readonly fields: NewsletterArchiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsletterArchive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterArchiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    newsletter<T extends NewsletterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsletterDefaultArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsletterArchive model
   */ 
  interface NewsletterArchiveFieldRefs {
    readonly id: FieldRef<"NewsletterArchive", 'Int'>
    readonly newsletterId: FieldRef<"NewsletterArchive", 'Int'>
    readonly userId: FieldRef<"NewsletterArchive", 'Int'>
    readonly sentAt: FieldRef<"NewsletterArchive", 'DateTime'>
    readonly archiveDate: FieldRef<"NewsletterArchive", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsletterArchive findUnique
   */
  export type NewsletterArchiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterArchive to fetch.
     */
    where: NewsletterArchiveWhereUniqueInput
  }

  /**
   * NewsletterArchive findUniqueOrThrow
   */
  export type NewsletterArchiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterArchive to fetch.
     */
    where: NewsletterArchiveWhereUniqueInput
  }

  /**
   * NewsletterArchive findFirst
   */
  export type NewsletterArchiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterArchive to fetch.
     */
    where?: NewsletterArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterArchives to fetch.
     */
    orderBy?: NewsletterArchiveOrderByWithRelationInput | NewsletterArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterArchives.
     */
    cursor?: NewsletterArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterArchives.
     */
    distinct?: NewsletterArchiveScalarFieldEnum | NewsletterArchiveScalarFieldEnum[]
  }

  /**
   * NewsletterArchive findFirstOrThrow
   */
  export type NewsletterArchiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterArchive to fetch.
     */
    where?: NewsletterArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterArchives to fetch.
     */
    orderBy?: NewsletterArchiveOrderByWithRelationInput | NewsletterArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterArchives.
     */
    cursor?: NewsletterArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterArchives.
     */
    distinct?: NewsletterArchiveScalarFieldEnum | NewsletterArchiveScalarFieldEnum[]
  }

  /**
   * NewsletterArchive findMany
   */
  export type NewsletterArchiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterArchives to fetch.
     */
    where?: NewsletterArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterArchives to fetch.
     */
    orderBy?: NewsletterArchiveOrderByWithRelationInput | NewsletterArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsletterArchives.
     */
    cursor?: NewsletterArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterArchives.
     */
    skip?: number
    distinct?: NewsletterArchiveScalarFieldEnum | NewsletterArchiveScalarFieldEnum[]
  }

  /**
   * NewsletterArchive create
   */
  export type NewsletterArchiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsletterArchive.
     */
    data: XOR<NewsletterArchiveCreateInput, NewsletterArchiveUncheckedCreateInput>
  }

  /**
   * NewsletterArchive createMany
   */
  export type NewsletterArchiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsletterArchives.
     */
    data: NewsletterArchiveCreateManyInput | NewsletterArchiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterArchive update
   */
  export type NewsletterArchiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsletterArchive.
     */
    data: XOR<NewsletterArchiveUpdateInput, NewsletterArchiveUncheckedUpdateInput>
    /**
     * Choose, which NewsletterArchive to update.
     */
    where: NewsletterArchiveWhereUniqueInput
  }

  /**
   * NewsletterArchive updateMany
   */
  export type NewsletterArchiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsletterArchives.
     */
    data: XOR<NewsletterArchiveUpdateManyMutationInput, NewsletterArchiveUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterArchives to update
     */
    where?: NewsletterArchiveWhereInput
  }

  /**
   * NewsletterArchive upsert
   */
  export type NewsletterArchiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsletterArchive to update in case it exists.
     */
    where: NewsletterArchiveWhereUniqueInput
    /**
     * In case the NewsletterArchive found by the `where` argument doesn't exist, create a new NewsletterArchive with this data.
     */
    create: XOR<NewsletterArchiveCreateInput, NewsletterArchiveUncheckedCreateInput>
    /**
     * In case the NewsletterArchive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterArchiveUpdateInput, NewsletterArchiveUncheckedUpdateInput>
  }

  /**
   * NewsletterArchive delete
   */
  export type NewsletterArchiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
    /**
     * Filter which NewsletterArchive to delete.
     */
    where: NewsletterArchiveWhereUniqueInput
  }

  /**
   * NewsletterArchive deleteMany
   */
  export type NewsletterArchiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterArchives to delete
     */
    where?: NewsletterArchiveWhereInput
  }

  /**
   * NewsletterArchive without action
   */
  export type NewsletterArchiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterArchive
     */
    select?: NewsletterArchiveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterArchiveInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    profileImg: 'profileImg',
    interests: 'interests',
    timezone: 'timezone',
    role: 'role',
    notificationPreferences: 'notificationPreferences',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OAuthTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type OAuthTokenScalarFieldEnum = (typeof OAuthTokenScalarFieldEnum)[keyof typeof OAuthTokenScalarFieldEnum]


  export const NewsletterScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    templateId: 'templateId',
    frequency: 'frequency',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type NewsletterScalarFieldEnum = (typeof NewsletterScalarFieldEnum)[keyof typeof NewsletterScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    newsletterId: 'newsletterId',
    rating: 'rating',
    comments: 'comments',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const RetryQueueScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    email: 'email',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type RetryQueueScalarFieldEnum = (typeof RetryQueueScalarFieldEnum)[keyof typeof RetryQueueScalarFieldEnum]


  export const NewsletterArchiveScalarFieldEnum: {
    id: 'id',
    newsletterId: 'newsletterId',
    userId: 'userId',
    sentAt: 'sentAt',
    archiveDate: 'archiveDate'
  };

  export type NewsletterArchiveScalarFieldEnum = (typeof NewsletterArchiveScalarFieldEnum)[keyof typeof NewsletterArchiveScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    username: 'username',
    profileImg: 'profileImg',
    timezone: 'timezone',
    role: 'role'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const OAuthTokenOrderByRelevanceFieldEnum: {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken'
  };

  export type OAuthTokenOrderByRelevanceFieldEnum = (typeof OAuthTokenOrderByRelevanceFieldEnum)[keyof typeof OAuthTokenOrderByRelevanceFieldEnum]


  export const NewsletterOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    frequency: 'frequency'
  };

  export type NewsletterOrderByRelevanceFieldEnum = (typeof NewsletterOrderByRelevanceFieldEnum)[keyof typeof NewsletterOrderByRelevanceFieldEnum]


  export const FeedbackOrderByRelevanceFieldEnum: {
    comments: 'comments'
  };

  export type FeedbackOrderByRelevanceFieldEnum = (typeof FeedbackOrderByRelevanceFieldEnum)[keyof typeof FeedbackOrderByRelevanceFieldEnum]


  export const RetryQueueOrderByRelevanceFieldEnum: {
    email: 'email',
    status: 'status'
  };

  export type RetryQueueOrderByRelevanceFieldEnum = (typeof RetryQueueOrderByRelevanceFieldEnum)[keyof typeof RetryQueueOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    profileImg?: StringNullableFilter<"User"> | string | null
    interests?: JsonNullableFilter<"User">
    timezone?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    notificationPreferences?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    OAuthTokens?: OAuthTokenListRelationFilter
    Newsletters?: NewsletterListRelationFilter
    Feedbacks?: FeedbackListRelationFilter
    RetryQueues?: RetryQueueListRelationFilter
    NewsletterArchives?: NewsletterArchiveListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrderInput | SortOrder
    profileImg?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    timezone?: SortOrder
    role?: SortOrder
    notificationPreferences?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    OAuthTokens?: OAuthTokenOrderByRelationAggregateInput
    Newsletters?: NewsletterOrderByRelationAggregateInput
    Feedbacks?: FeedbackOrderByRelationAggregateInput
    RetryQueues?: RetryQueueOrderByRelationAggregateInput
    NewsletterArchives?: NewsletterArchiveOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    profileImg?: StringNullableFilter<"User"> | string | null
    interests?: JsonNullableFilter<"User">
    timezone?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    notificationPreferences?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    OAuthTokens?: OAuthTokenListRelationFilter
    Newsletters?: NewsletterListRelationFilter
    Feedbacks?: FeedbackListRelationFilter
    RetryQueues?: RetryQueueListRelationFilter
    NewsletterArchives?: NewsletterArchiveListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrderInput | SortOrder
    profileImg?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    timezone?: SortOrder
    role?: SortOrder
    notificationPreferences?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImg?: StringNullableWithAggregatesFilter<"User"> | string | null
    interests?: JsonNullableWithAggregatesFilter<"User">
    timezone?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    notificationPreferences?: JsonNullableWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OAuthTokenWhereInput = {
    AND?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    OR?: OAuthTokenWhereInput[]
    NOT?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    id?: IntFilter<"OAuthToken"> | number
    userId?: IntFilter<"OAuthToken"> | number
    accessToken?: StringFilter<"OAuthToken"> | string
    refreshToken?: StringFilter<"OAuthToken"> | string
    expiresAt?: DateTimeFilter<"OAuthToken"> | Date | string
    createdAt?: DateTimeFilter<"OAuthToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OAuthTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: OAuthTokenOrderByRelevanceInput
  }

  export type OAuthTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    OR?: OAuthTokenWhereInput[]
    NOT?: OAuthTokenWhereInput | OAuthTokenWhereInput[]
    userId?: IntFilter<"OAuthToken"> | number
    accessToken?: StringFilter<"OAuthToken"> | string
    refreshToken?: StringFilter<"OAuthToken"> | string
    expiresAt?: DateTimeFilter<"OAuthToken"> | Date | string
    createdAt?: DateTimeFilter<"OAuthToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OAuthTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: OAuthTokenCountOrderByAggregateInput
    _avg?: OAuthTokenAvgOrderByAggregateInput
    _max?: OAuthTokenMaxOrderByAggregateInput
    _min?: OAuthTokenMinOrderByAggregateInput
    _sum?: OAuthTokenSumOrderByAggregateInput
  }

  export type OAuthTokenScalarWhereWithAggregatesInput = {
    AND?: OAuthTokenScalarWhereWithAggregatesInput | OAuthTokenScalarWhereWithAggregatesInput[]
    OR?: OAuthTokenScalarWhereWithAggregatesInput[]
    NOT?: OAuthTokenScalarWhereWithAggregatesInput | OAuthTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OAuthToken"> | number
    userId?: IntWithAggregatesFilter<"OAuthToken"> | number
    accessToken?: StringWithAggregatesFilter<"OAuthToken"> | string
    refreshToken?: StringWithAggregatesFilter<"OAuthToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OAuthToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"OAuthToken"> | Date | string
  }

  export type NewsletterWhereInput = {
    AND?: NewsletterWhereInput | NewsletterWhereInput[]
    OR?: NewsletterWhereInput[]
    NOT?: NewsletterWhereInput | NewsletterWhereInput[]
    id?: IntFilter<"Newsletter"> | number
    title?: StringFilter<"Newsletter"> | string
    content?: StringFilter<"Newsletter"> | string
    templateId?: IntNullableFilter<"Newsletter"> | number | null
    frequency?: StringFilter<"Newsletter"> | string
    userId?: IntFilter<"Newsletter"> | number
    createdAt?: DateTimeFilter<"Newsletter"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Feedbacks?: FeedbackListRelationFilter
    Archives?: NewsletterArchiveListRelationFilter
  }

  export type NewsletterOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    templateId?: SortOrderInput | SortOrder
    frequency?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Feedbacks?: FeedbackOrderByRelationAggregateInput
    Archives?: NewsletterArchiveOrderByRelationAggregateInput
    _relevance?: NewsletterOrderByRelevanceInput
  }

  export type NewsletterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NewsletterWhereInput | NewsletterWhereInput[]
    OR?: NewsletterWhereInput[]
    NOT?: NewsletterWhereInput | NewsletterWhereInput[]
    title?: StringFilter<"Newsletter"> | string
    content?: StringFilter<"Newsletter"> | string
    templateId?: IntNullableFilter<"Newsletter"> | number | null
    frequency?: StringFilter<"Newsletter"> | string
    userId?: IntFilter<"Newsletter"> | number
    createdAt?: DateTimeFilter<"Newsletter"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Feedbacks?: FeedbackListRelationFilter
    Archives?: NewsletterArchiveListRelationFilter
  }, "id">

  export type NewsletterOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    templateId?: SortOrderInput | SortOrder
    frequency?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: NewsletterCountOrderByAggregateInput
    _avg?: NewsletterAvgOrderByAggregateInput
    _max?: NewsletterMaxOrderByAggregateInput
    _min?: NewsletterMinOrderByAggregateInput
    _sum?: NewsletterSumOrderByAggregateInput
  }

  export type NewsletterScalarWhereWithAggregatesInput = {
    AND?: NewsletterScalarWhereWithAggregatesInput | NewsletterScalarWhereWithAggregatesInput[]
    OR?: NewsletterScalarWhereWithAggregatesInput[]
    NOT?: NewsletterScalarWhereWithAggregatesInput | NewsletterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Newsletter"> | number
    title?: StringWithAggregatesFilter<"Newsletter"> | string
    content?: StringWithAggregatesFilter<"Newsletter"> | string
    templateId?: IntNullableWithAggregatesFilter<"Newsletter"> | number | null
    frequency?: StringWithAggregatesFilter<"Newsletter"> | string
    userId?: IntWithAggregatesFilter<"Newsletter"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Newsletter"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    userId?: IntFilter<"Feedback"> | number
    newsletterId?: IntFilter<"Feedback"> | number
    rating?: IntFilter<"Feedback"> | number
    comments?: StringNullableFilter<"Feedback"> | string | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsletter?: XOR<NewsletterScalarRelationFilter, NewsletterWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    newsletterId?: SortOrder
    rating?: SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    newsletter?: NewsletterOrderByWithRelationInput
    _relevance?: FeedbackOrderByRelevanceInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    userId?: IntFilter<"Feedback"> | number
    newsletterId?: IntFilter<"Feedback"> | number
    rating?: IntFilter<"Feedback"> | number
    comments?: StringNullableFilter<"Feedback"> | string | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsletter?: XOR<NewsletterScalarRelationFilter, NewsletterWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    newsletterId?: SortOrder
    rating?: SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    userId?: IntWithAggregatesFilter<"Feedback"> | number
    newsletterId?: IntWithAggregatesFilter<"Feedback"> | number
    rating?: IntWithAggregatesFilter<"Feedback"> | number
    comments?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type RetryQueueWhereInput = {
    AND?: RetryQueueWhereInput | RetryQueueWhereInput[]
    OR?: RetryQueueWhereInput[]
    NOT?: RetryQueueWhereInput | RetryQueueWhereInput[]
    id?: IntFilter<"RetryQueue"> | number
    userId?: IntNullableFilter<"RetryQueue"> | number | null
    email?: StringFilter<"RetryQueue"> | string
    status?: StringFilter<"RetryQueue"> | string
    createdAt?: DateTimeFilter<"RetryQueue"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RetryQueueOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: RetryQueueOrderByRelevanceInput
  }

  export type RetryQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RetryQueueWhereInput | RetryQueueWhereInput[]
    OR?: RetryQueueWhereInput[]
    NOT?: RetryQueueWhereInput | RetryQueueWhereInput[]
    userId?: IntNullableFilter<"RetryQueue"> | number | null
    email?: StringFilter<"RetryQueue"> | string
    status?: StringFilter<"RetryQueue"> | string
    createdAt?: DateTimeFilter<"RetryQueue"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RetryQueueOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: RetryQueueCountOrderByAggregateInput
    _avg?: RetryQueueAvgOrderByAggregateInput
    _max?: RetryQueueMaxOrderByAggregateInput
    _min?: RetryQueueMinOrderByAggregateInput
    _sum?: RetryQueueSumOrderByAggregateInput
  }

  export type RetryQueueScalarWhereWithAggregatesInput = {
    AND?: RetryQueueScalarWhereWithAggregatesInput | RetryQueueScalarWhereWithAggregatesInput[]
    OR?: RetryQueueScalarWhereWithAggregatesInput[]
    NOT?: RetryQueueScalarWhereWithAggregatesInput | RetryQueueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RetryQueue"> | number
    userId?: IntNullableWithAggregatesFilter<"RetryQueue"> | number | null
    email?: StringWithAggregatesFilter<"RetryQueue"> | string
    status?: StringWithAggregatesFilter<"RetryQueue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RetryQueue"> | Date | string
  }

  export type NewsletterArchiveWhereInput = {
    AND?: NewsletterArchiveWhereInput | NewsletterArchiveWhereInput[]
    OR?: NewsletterArchiveWhereInput[]
    NOT?: NewsletterArchiveWhereInput | NewsletterArchiveWhereInput[]
    id?: IntFilter<"NewsletterArchive"> | number
    newsletterId?: IntFilter<"NewsletterArchive"> | number
    userId?: IntFilter<"NewsletterArchive"> | number
    sentAt?: DateTimeFilter<"NewsletterArchive"> | Date | string
    archiveDate?: DateTimeFilter<"NewsletterArchive"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsletter?: XOR<NewsletterScalarRelationFilter, NewsletterWhereInput>
  }

  export type NewsletterArchiveOrderByWithRelationInput = {
    id?: SortOrder
    newsletterId?: SortOrder
    userId?: SortOrder
    sentAt?: SortOrder
    archiveDate?: SortOrder
    user?: UserOrderByWithRelationInput
    newsletter?: NewsletterOrderByWithRelationInput
  }

  export type NewsletterArchiveWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NewsletterArchiveWhereInput | NewsletterArchiveWhereInput[]
    OR?: NewsletterArchiveWhereInput[]
    NOT?: NewsletterArchiveWhereInput | NewsletterArchiveWhereInput[]
    newsletterId?: IntFilter<"NewsletterArchive"> | number
    userId?: IntFilter<"NewsletterArchive"> | number
    sentAt?: DateTimeFilter<"NewsletterArchive"> | Date | string
    archiveDate?: DateTimeFilter<"NewsletterArchive"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsletter?: XOR<NewsletterScalarRelationFilter, NewsletterWhereInput>
  }, "id">

  export type NewsletterArchiveOrderByWithAggregationInput = {
    id?: SortOrder
    newsletterId?: SortOrder
    userId?: SortOrder
    sentAt?: SortOrder
    archiveDate?: SortOrder
    _count?: NewsletterArchiveCountOrderByAggregateInput
    _avg?: NewsletterArchiveAvgOrderByAggregateInput
    _max?: NewsletterArchiveMaxOrderByAggregateInput
    _min?: NewsletterArchiveMinOrderByAggregateInput
    _sum?: NewsletterArchiveSumOrderByAggregateInput
  }

  export type NewsletterArchiveScalarWhereWithAggregatesInput = {
    AND?: NewsletterArchiveScalarWhereWithAggregatesInput | NewsletterArchiveScalarWhereWithAggregatesInput[]
    OR?: NewsletterArchiveScalarWhereWithAggregatesInput[]
    NOT?: NewsletterArchiveScalarWhereWithAggregatesInput | NewsletterArchiveScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsletterArchive"> | number
    newsletterId?: IntWithAggregatesFilter<"NewsletterArchive"> | number
    userId?: IntWithAggregatesFilter<"NewsletterArchive"> | number
    sentAt?: DateTimeWithAggregatesFilter<"NewsletterArchive"> | Date | string
    archiveDate?: DateTimeWithAggregatesFilter<"NewsletterArchive"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    OAuthTokens?: OAuthTokenCreateNestedManyWithoutUserInput
    Newsletters?: NewsletterCreateNestedManyWithoutUserInput
    Feedbacks?: FeedbackCreateNestedManyWithoutUserInput
    RetryQueues?: RetryQueueCreateNestedManyWithoutUserInput
    NewsletterArchives?: NewsletterArchiveCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    OAuthTokens?: OAuthTokenUncheckedCreateNestedManyWithoutUserInput
    Newsletters?: NewsletterUncheckedCreateNestedManyWithoutUserInput
    Feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    RetryQueues?: RetryQueueUncheckedCreateNestedManyWithoutUserInput
    NewsletterArchives?: NewsletterArchiveUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OAuthTokens?: OAuthTokenUpdateManyWithoutUserNestedInput
    Newsletters?: NewsletterUpdateManyWithoutUserNestedInput
    Feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
    RetryQueues?: RetryQueueUpdateManyWithoutUserNestedInput
    NewsletterArchives?: NewsletterArchiveUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OAuthTokens?: OAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    Newsletters?: NewsletterUncheckedUpdateManyWithoutUserNestedInput
    Feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    RetryQueues?: RetryQueueUncheckedUpdateManyWithoutUserNestedInput
    NewsletterArchives?: NewsletterArchiveUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenCreateInput = {
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOAuthTokensInput
  }

  export type OAuthTokenUncheckedCreateInput = {
    id?: number
    userId: number
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OAuthTokenUpdateInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOAuthTokensNestedInput
  }

  export type OAuthTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenCreateManyInput = {
    id?: number
    userId: number
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OAuthTokenUpdateManyMutationInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterCreateInput = {
    title: string
    content: string
    templateId?: number | null
    frequency?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNewslettersInput
    Feedbacks?: FeedbackCreateNestedManyWithoutNewsletterInput
    Archives?: NewsletterArchiveCreateNestedManyWithoutNewsletterInput
  }

  export type NewsletterUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    templateId?: number | null
    frequency?: string
    userId: number
    createdAt?: Date | string
    Feedbacks?: FeedbackUncheckedCreateNestedManyWithoutNewsletterInput
    Archives?: NewsletterArchiveUncheckedCreateNestedManyWithoutNewsletterInput
  }

  export type NewsletterUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    frequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNewslettersNestedInput
    Feedbacks?: FeedbackUpdateManyWithoutNewsletterNestedInput
    Archives?: NewsletterArchiveUpdateManyWithoutNewsletterNestedInput
  }

  export type NewsletterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    frequency?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Feedbacks?: FeedbackUncheckedUpdateManyWithoutNewsletterNestedInput
    Archives?: NewsletterArchiveUncheckedUpdateManyWithoutNewsletterNestedInput
  }

  export type NewsletterCreateManyInput = {
    id?: number
    title: string
    content: string
    templateId?: number | null
    frequency?: string
    userId: number
    createdAt?: Date | string
  }

  export type NewsletterUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    frequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    frequency?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    rating: number
    comments?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbacksInput
    newsletter: NewsletterCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    userId: number
    newsletterId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
    newsletter?: NewsletterUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    newsletterId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: number
    userId: number
    newsletterId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    newsletterId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetryQueueCreateInput = {
    email: string
    status?: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutRetryQueuesInput
  }

  export type RetryQueueUncheckedCreateInput = {
    id?: number
    userId?: number | null
    email: string
    status?: string
    createdAt?: Date | string
  }

  export type RetryQueueUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutRetryQueuesNestedInput
  }

  export type RetryQueueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetryQueueCreateManyInput = {
    id?: number
    userId?: number | null
    email: string
    status?: string
    createdAt?: Date | string
  }

  export type RetryQueueUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetryQueueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterArchiveCreateInput = {
    sentAt: Date | string
    archiveDate?: Date | string
    user: UserCreateNestedOneWithoutNewsletterArchivesInput
    newsletter: NewsletterCreateNestedOneWithoutArchivesInput
  }

  export type NewsletterArchiveUncheckedCreateInput = {
    id?: number
    newsletterId: number
    userId: number
    sentAt: Date | string
    archiveDate?: Date | string
  }

  export type NewsletterArchiveUpdateInput = {
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNewsletterArchivesNestedInput
    newsletter?: NewsletterUpdateOneRequiredWithoutArchivesNestedInput
  }

  export type NewsletterArchiveUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    newsletterId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterArchiveCreateManyInput = {
    id?: number
    newsletterId: number
    userId: number
    sentAt: Date | string
    archiveDate?: Date | string
  }

  export type NewsletterArchiveUpdateManyMutationInput = {
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterArchiveUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    newsletterId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OAuthTokenListRelationFilter = {
    every?: OAuthTokenWhereInput
    some?: OAuthTokenWhereInput
    none?: OAuthTokenWhereInput
  }

  export type NewsletterListRelationFilter = {
    every?: NewsletterWhereInput
    some?: NewsletterWhereInput
    none?: NewsletterWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type RetryQueueListRelationFilter = {
    every?: RetryQueueWhereInput
    some?: RetryQueueWhereInput
    none?: RetryQueueWhereInput
  }

  export type NewsletterArchiveListRelationFilter = {
    every?: NewsletterArchiveWhereInput
    some?: NewsletterArchiveWhereInput
    none?: NewsletterArchiveWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OAuthTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsletterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RetryQueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsletterArchiveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    profileImg?: SortOrder
    interests?: SortOrder
    timezone?: SortOrder
    role?: SortOrder
    notificationPreferences?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    profileImg?: SortOrder
    timezone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    profileImg?: SortOrder
    timezone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OAuthTokenOrderByRelevanceInput = {
    fields: OAuthTokenOrderByRelevanceFieldEnum | OAuthTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OAuthTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type OAuthTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NewsletterOrderByRelevanceInput = {
    fields: NewsletterOrderByRelevanceFieldEnum | NewsletterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NewsletterCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    templateId?: SortOrder
    frequency?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterAvgOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    userId?: SortOrder
  }

  export type NewsletterMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    templateId?: SortOrder
    frequency?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    templateId?: SortOrder
    frequency?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterSumOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NewsletterScalarRelationFilter = {
    is?: NewsletterWhereInput
    isNot?: NewsletterWhereInput
  }

  export type FeedbackOrderByRelevanceInput = {
    fields: FeedbackOrderByRelevanceFieldEnum | FeedbackOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    newsletterId?: SortOrder
    rating?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    newsletterId?: SortOrder
    rating?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    newsletterId?: SortOrder
    rating?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    newsletterId?: SortOrder
    rating?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    newsletterId?: SortOrder
    rating?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RetryQueueOrderByRelevanceInput = {
    fields: RetryQueueOrderByRelevanceFieldEnum | RetryQueueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RetryQueueCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RetryQueueAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RetryQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RetryQueueMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RetryQueueSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NewsletterArchiveCountOrderByAggregateInput = {
    id?: SortOrder
    newsletterId?: SortOrder
    userId?: SortOrder
    sentAt?: SortOrder
    archiveDate?: SortOrder
  }

  export type NewsletterArchiveAvgOrderByAggregateInput = {
    id?: SortOrder
    newsletterId?: SortOrder
    userId?: SortOrder
  }

  export type NewsletterArchiveMaxOrderByAggregateInput = {
    id?: SortOrder
    newsletterId?: SortOrder
    userId?: SortOrder
    sentAt?: SortOrder
    archiveDate?: SortOrder
  }

  export type NewsletterArchiveMinOrderByAggregateInput = {
    id?: SortOrder
    newsletterId?: SortOrder
    userId?: SortOrder
    sentAt?: SortOrder
    archiveDate?: SortOrder
  }

  export type NewsletterArchiveSumOrderByAggregateInput = {
    id?: SortOrder
    newsletterId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput> | OAuthTokenCreateWithoutUserInput[] | OAuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthTokenCreateOrConnectWithoutUserInput | OAuthTokenCreateOrConnectWithoutUserInput[]
    createMany?: OAuthTokenCreateManyUserInputEnvelope
    connect?: OAuthTokenWhereUniqueInput | OAuthTokenWhereUniqueInput[]
  }

  export type NewsletterCreateNestedManyWithoutUserInput = {
    create?: XOR<NewsletterCreateWithoutUserInput, NewsletterUncheckedCreateWithoutUserInput> | NewsletterCreateWithoutUserInput[] | NewsletterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsletterCreateOrConnectWithoutUserInput | NewsletterCreateOrConnectWithoutUserInput[]
    createMany?: NewsletterCreateManyUserInputEnvelope
    connect?: NewsletterWhereUniqueInput | NewsletterWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type RetryQueueCreateNestedManyWithoutUserInput = {
    create?: XOR<RetryQueueCreateWithoutUserInput, RetryQueueUncheckedCreateWithoutUserInput> | RetryQueueCreateWithoutUserInput[] | RetryQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RetryQueueCreateOrConnectWithoutUserInput | RetryQueueCreateOrConnectWithoutUserInput[]
    createMany?: RetryQueueCreateManyUserInputEnvelope
    connect?: RetryQueueWhereUniqueInput | RetryQueueWhereUniqueInput[]
  }

  export type NewsletterArchiveCreateNestedManyWithoutUserInput = {
    create?: XOR<NewsletterArchiveCreateWithoutUserInput, NewsletterArchiveUncheckedCreateWithoutUserInput> | NewsletterArchiveCreateWithoutUserInput[] | NewsletterArchiveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsletterArchiveCreateOrConnectWithoutUserInput | NewsletterArchiveCreateOrConnectWithoutUserInput[]
    createMany?: NewsletterArchiveCreateManyUserInputEnvelope
    connect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
  }

  export type OAuthTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput> | OAuthTokenCreateWithoutUserInput[] | OAuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthTokenCreateOrConnectWithoutUserInput | OAuthTokenCreateOrConnectWithoutUserInput[]
    createMany?: OAuthTokenCreateManyUserInputEnvelope
    connect?: OAuthTokenWhereUniqueInput | OAuthTokenWhereUniqueInput[]
  }

  export type NewsletterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NewsletterCreateWithoutUserInput, NewsletterUncheckedCreateWithoutUserInput> | NewsletterCreateWithoutUserInput[] | NewsletterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsletterCreateOrConnectWithoutUserInput | NewsletterCreateOrConnectWithoutUserInput[]
    createMany?: NewsletterCreateManyUserInputEnvelope
    connect?: NewsletterWhereUniqueInput | NewsletterWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type RetryQueueUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RetryQueueCreateWithoutUserInput, RetryQueueUncheckedCreateWithoutUserInput> | RetryQueueCreateWithoutUserInput[] | RetryQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RetryQueueCreateOrConnectWithoutUserInput | RetryQueueCreateOrConnectWithoutUserInput[]
    createMany?: RetryQueueCreateManyUserInputEnvelope
    connect?: RetryQueueWhereUniqueInput | RetryQueueWhereUniqueInput[]
  }

  export type NewsletterArchiveUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NewsletterArchiveCreateWithoutUserInput, NewsletterArchiveUncheckedCreateWithoutUserInput> | NewsletterArchiveCreateWithoutUserInput[] | NewsletterArchiveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsletterArchiveCreateOrConnectWithoutUserInput | NewsletterArchiveCreateOrConnectWithoutUserInput[]
    createMany?: NewsletterArchiveCreateManyUserInputEnvelope
    connect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OAuthTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput> | OAuthTokenCreateWithoutUserInput[] | OAuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthTokenCreateOrConnectWithoutUserInput | OAuthTokenCreateOrConnectWithoutUserInput[]
    upsert?: OAuthTokenUpsertWithWhereUniqueWithoutUserInput | OAuthTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthTokenCreateManyUserInputEnvelope
    set?: OAuthTokenWhereUniqueInput | OAuthTokenWhereUniqueInput[]
    disconnect?: OAuthTokenWhereUniqueInput | OAuthTokenWhereUniqueInput[]
    delete?: OAuthTokenWhereUniqueInput | OAuthTokenWhereUniqueInput[]
    connect?: OAuthTokenWhereUniqueInput | OAuthTokenWhereUniqueInput[]
    update?: OAuthTokenUpdateWithWhereUniqueWithoutUserInput | OAuthTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthTokenUpdateManyWithWhereWithoutUserInput | OAuthTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthTokenScalarWhereInput | OAuthTokenScalarWhereInput[]
  }

  export type NewsletterUpdateManyWithoutUserNestedInput = {
    create?: XOR<NewsletterCreateWithoutUserInput, NewsletterUncheckedCreateWithoutUserInput> | NewsletterCreateWithoutUserInput[] | NewsletterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsletterCreateOrConnectWithoutUserInput | NewsletterCreateOrConnectWithoutUserInput[]
    upsert?: NewsletterUpsertWithWhereUniqueWithoutUserInput | NewsletterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NewsletterCreateManyUserInputEnvelope
    set?: NewsletterWhereUniqueInput | NewsletterWhereUniqueInput[]
    disconnect?: NewsletterWhereUniqueInput | NewsletterWhereUniqueInput[]
    delete?: NewsletterWhereUniqueInput | NewsletterWhereUniqueInput[]
    connect?: NewsletterWhereUniqueInput | NewsletterWhereUniqueInput[]
    update?: NewsletterUpdateWithWhereUniqueWithoutUserInput | NewsletterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NewsletterUpdateManyWithWhereWithoutUserInput | NewsletterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NewsletterScalarWhereInput | NewsletterScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type RetryQueueUpdateManyWithoutUserNestedInput = {
    create?: XOR<RetryQueueCreateWithoutUserInput, RetryQueueUncheckedCreateWithoutUserInput> | RetryQueueCreateWithoutUserInput[] | RetryQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RetryQueueCreateOrConnectWithoutUserInput | RetryQueueCreateOrConnectWithoutUserInput[]
    upsert?: RetryQueueUpsertWithWhereUniqueWithoutUserInput | RetryQueueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RetryQueueCreateManyUserInputEnvelope
    set?: RetryQueueWhereUniqueInput | RetryQueueWhereUniqueInput[]
    disconnect?: RetryQueueWhereUniqueInput | RetryQueueWhereUniqueInput[]
    delete?: RetryQueueWhereUniqueInput | RetryQueueWhereUniqueInput[]
    connect?: RetryQueueWhereUniqueInput | RetryQueueWhereUniqueInput[]
    update?: RetryQueueUpdateWithWhereUniqueWithoutUserInput | RetryQueueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RetryQueueUpdateManyWithWhereWithoutUserInput | RetryQueueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RetryQueueScalarWhereInput | RetryQueueScalarWhereInput[]
  }

  export type NewsletterArchiveUpdateManyWithoutUserNestedInput = {
    create?: XOR<NewsletterArchiveCreateWithoutUserInput, NewsletterArchiveUncheckedCreateWithoutUserInput> | NewsletterArchiveCreateWithoutUserInput[] | NewsletterArchiveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsletterArchiveCreateOrConnectWithoutUserInput | NewsletterArchiveCreateOrConnectWithoutUserInput[]
    upsert?: NewsletterArchiveUpsertWithWhereUniqueWithoutUserInput | NewsletterArchiveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NewsletterArchiveCreateManyUserInputEnvelope
    set?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    disconnect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    delete?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    connect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    update?: NewsletterArchiveUpdateWithWhereUniqueWithoutUserInput | NewsletterArchiveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NewsletterArchiveUpdateManyWithWhereWithoutUserInput | NewsletterArchiveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NewsletterArchiveScalarWhereInput | NewsletterArchiveScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OAuthTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput> | OAuthTokenCreateWithoutUserInput[] | OAuthTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthTokenCreateOrConnectWithoutUserInput | OAuthTokenCreateOrConnectWithoutUserInput[]
    upsert?: OAuthTokenUpsertWithWhereUniqueWithoutUserInput | OAuthTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthTokenCreateManyUserInputEnvelope
    set?: OAuthTokenWhereUniqueInput | OAuthTokenWhereUniqueInput[]
    disconnect?: OAuthTokenWhereUniqueInput | OAuthTokenWhereUniqueInput[]
    delete?: OAuthTokenWhereUniqueInput | OAuthTokenWhereUniqueInput[]
    connect?: OAuthTokenWhereUniqueInput | OAuthTokenWhereUniqueInput[]
    update?: OAuthTokenUpdateWithWhereUniqueWithoutUserInput | OAuthTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthTokenUpdateManyWithWhereWithoutUserInput | OAuthTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthTokenScalarWhereInput | OAuthTokenScalarWhereInput[]
  }

  export type NewsletterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NewsletterCreateWithoutUserInput, NewsletterUncheckedCreateWithoutUserInput> | NewsletterCreateWithoutUserInput[] | NewsletterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsletterCreateOrConnectWithoutUserInput | NewsletterCreateOrConnectWithoutUserInput[]
    upsert?: NewsletterUpsertWithWhereUniqueWithoutUserInput | NewsletterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NewsletterCreateManyUserInputEnvelope
    set?: NewsletterWhereUniqueInput | NewsletterWhereUniqueInput[]
    disconnect?: NewsletterWhereUniqueInput | NewsletterWhereUniqueInput[]
    delete?: NewsletterWhereUniqueInput | NewsletterWhereUniqueInput[]
    connect?: NewsletterWhereUniqueInput | NewsletterWhereUniqueInput[]
    update?: NewsletterUpdateWithWhereUniqueWithoutUserInput | NewsletterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NewsletterUpdateManyWithWhereWithoutUserInput | NewsletterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NewsletterScalarWhereInput | NewsletterScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type RetryQueueUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RetryQueueCreateWithoutUserInput, RetryQueueUncheckedCreateWithoutUserInput> | RetryQueueCreateWithoutUserInput[] | RetryQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RetryQueueCreateOrConnectWithoutUserInput | RetryQueueCreateOrConnectWithoutUserInput[]
    upsert?: RetryQueueUpsertWithWhereUniqueWithoutUserInput | RetryQueueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RetryQueueCreateManyUserInputEnvelope
    set?: RetryQueueWhereUniqueInput | RetryQueueWhereUniqueInput[]
    disconnect?: RetryQueueWhereUniqueInput | RetryQueueWhereUniqueInput[]
    delete?: RetryQueueWhereUniqueInput | RetryQueueWhereUniqueInput[]
    connect?: RetryQueueWhereUniqueInput | RetryQueueWhereUniqueInput[]
    update?: RetryQueueUpdateWithWhereUniqueWithoutUserInput | RetryQueueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RetryQueueUpdateManyWithWhereWithoutUserInput | RetryQueueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RetryQueueScalarWhereInput | RetryQueueScalarWhereInput[]
  }

  export type NewsletterArchiveUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NewsletterArchiveCreateWithoutUserInput, NewsletterArchiveUncheckedCreateWithoutUserInput> | NewsletterArchiveCreateWithoutUserInput[] | NewsletterArchiveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsletterArchiveCreateOrConnectWithoutUserInput | NewsletterArchiveCreateOrConnectWithoutUserInput[]
    upsert?: NewsletterArchiveUpsertWithWhereUniqueWithoutUserInput | NewsletterArchiveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NewsletterArchiveCreateManyUserInputEnvelope
    set?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    disconnect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    delete?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    connect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    update?: NewsletterArchiveUpdateWithWhereUniqueWithoutUserInput | NewsletterArchiveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NewsletterArchiveUpdateManyWithWhereWithoutUserInput | NewsletterArchiveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NewsletterArchiveScalarWhereInput | NewsletterArchiveScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOAuthTokensInput = {
    create?: XOR<UserCreateWithoutOAuthTokensInput, UserUncheckedCreateWithoutOAuthTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutOAuthTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOAuthTokensNestedInput = {
    create?: XOR<UserCreateWithoutOAuthTokensInput, UserUncheckedCreateWithoutOAuthTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutOAuthTokensInput
    upsert?: UserUpsertWithoutOAuthTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOAuthTokensInput, UserUpdateWithoutOAuthTokensInput>, UserUncheckedUpdateWithoutOAuthTokensInput>
  }

  export type UserCreateNestedOneWithoutNewslettersInput = {
    create?: XOR<UserCreateWithoutNewslettersInput, UserUncheckedCreateWithoutNewslettersInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewslettersInput
    connect?: UserWhereUniqueInput
  }

  export type FeedbackCreateNestedManyWithoutNewsletterInput = {
    create?: XOR<FeedbackCreateWithoutNewsletterInput, FeedbackUncheckedCreateWithoutNewsletterInput> | FeedbackCreateWithoutNewsletterInput[] | FeedbackUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutNewsletterInput | FeedbackCreateOrConnectWithoutNewsletterInput[]
    createMany?: FeedbackCreateManyNewsletterInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type NewsletterArchiveCreateNestedManyWithoutNewsletterInput = {
    create?: XOR<NewsletterArchiveCreateWithoutNewsletterInput, NewsletterArchiveUncheckedCreateWithoutNewsletterInput> | NewsletterArchiveCreateWithoutNewsletterInput[] | NewsletterArchiveUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: NewsletterArchiveCreateOrConnectWithoutNewsletterInput | NewsletterArchiveCreateOrConnectWithoutNewsletterInput[]
    createMany?: NewsletterArchiveCreateManyNewsletterInputEnvelope
    connect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutNewsletterInput = {
    create?: XOR<FeedbackCreateWithoutNewsletterInput, FeedbackUncheckedCreateWithoutNewsletterInput> | FeedbackCreateWithoutNewsletterInput[] | FeedbackUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutNewsletterInput | FeedbackCreateOrConnectWithoutNewsletterInput[]
    createMany?: FeedbackCreateManyNewsletterInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type NewsletterArchiveUncheckedCreateNestedManyWithoutNewsletterInput = {
    create?: XOR<NewsletterArchiveCreateWithoutNewsletterInput, NewsletterArchiveUncheckedCreateWithoutNewsletterInput> | NewsletterArchiveCreateWithoutNewsletterInput[] | NewsletterArchiveUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: NewsletterArchiveCreateOrConnectWithoutNewsletterInput | NewsletterArchiveCreateOrConnectWithoutNewsletterInput[]
    createMany?: NewsletterArchiveCreateManyNewsletterInputEnvelope
    connect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutNewslettersNestedInput = {
    create?: XOR<UserCreateWithoutNewslettersInput, UserUncheckedCreateWithoutNewslettersInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewslettersInput
    upsert?: UserUpsertWithoutNewslettersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewslettersInput, UserUpdateWithoutNewslettersInput>, UserUncheckedUpdateWithoutNewslettersInput>
  }

  export type FeedbackUpdateManyWithoutNewsletterNestedInput = {
    create?: XOR<FeedbackCreateWithoutNewsletterInput, FeedbackUncheckedCreateWithoutNewsletterInput> | FeedbackCreateWithoutNewsletterInput[] | FeedbackUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutNewsletterInput | FeedbackCreateOrConnectWithoutNewsletterInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutNewsletterInput | FeedbackUpsertWithWhereUniqueWithoutNewsletterInput[]
    createMany?: FeedbackCreateManyNewsletterInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutNewsletterInput | FeedbackUpdateWithWhereUniqueWithoutNewsletterInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutNewsletterInput | FeedbackUpdateManyWithWhereWithoutNewsletterInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type NewsletterArchiveUpdateManyWithoutNewsletterNestedInput = {
    create?: XOR<NewsletterArchiveCreateWithoutNewsletterInput, NewsletterArchiveUncheckedCreateWithoutNewsletterInput> | NewsletterArchiveCreateWithoutNewsletterInput[] | NewsletterArchiveUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: NewsletterArchiveCreateOrConnectWithoutNewsletterInput | NewsletterArchiveCreateOrConnectWithoutNewsletterInput[]
    upsert?: NewsletterArchiveUpsertWithWhereUniqueWithoutNewsletterInput | NewsletterArchiveUpsertWithWhereUniqueWithoutNewsletterInput[]
    createMany?: NewsletterArchiveCreateManyNewsletterInputEnvelope
    set?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    disconnect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    delete?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    connect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    update?: NewsletterArchiveUpdateWithWhereUniqueWithoutNewsletterInput | NewsletterArchiveUpdateWithWhereUniqueWithoutNewsletterInput[]
    updateMany?: NewsletterArchiveUpdateManyWithWhereWithoutNewsletterInput | NewsletterArchiveUpdateManyWithWhereWithoutNewsletterInput[]
    deleteMany?: NewsletterArchiveScalarWhereInput | NewsletterArchiveScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutNewsletterNestedInput = {
    create?: XOR<FeedbackCreateWithoutNewsletterInput, FeedbackUncheckedCreateWithoutNewsletterInput> | FeedbackCreateWithoutNewsletterInput[] | FeedbackUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutNewsletterInput | FeedbackCreateOrConnectWithoutNewsletterInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutNewsletterInput | FeedbackUpsertWithWhereUniqueWithoutNewsletterInput[]
    createMany?: FeedbackCreateManyNewsletterInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutNewsletterInput | FeedbackUpdateWithWhereUniqueWithoutNewsletterInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutNewsletterInput | FeedbackUpdateManyWithWhereWithoutNewsletterInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type NewsletterArchiveUncheckedUpdateManyWithoutNewsletterNestedInput = {
    create?: XOR<NewsletterArchiveCreateWithoutNewsletterInput, NewsletterArchiveUncheckedCreateWithoutNewsletterInput> | NewsletterArchiveCreateWithoutNewsletterInput[] | NewsletterArchiveUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: NewsletterArchiveCreateOrConnectWithoutNewsletterInput | NewsletterArchiveCreateOrConnectWithoutNewsletterInput[]
    upsert?: NewsletterArchiveUpsertWithWhereUniqueWithoutNewsletterInput | NewsletterArchiveUpsertWithWhereUniqueWithoutNewsletterInput[]
    createMany?: NewsletterArchiveCreateManyNewsletterInputEnvelope
    set?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    disconnect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    delete?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    connect?: NewsletterArchiveWhereUniqueInput | NewsletterArchiveWhereUniqueInput[]
    update?: NewsletterArchiveUpdateWithWhereUniqueWithoutNewsletterInput | NewsletterArchiveUpdateWithWhereUniqueWithoutNewsletterInput[]
    updateMany?: NewsletterArchiveUpdateManyWithWhereWithoutNewsletterInput | NewsletterArchiveUpdateManyWithWhereWithoutNewsletterInput[]
    deleteMany?: NewsletterArchiveScalarWhereInput | NewsletterArchiveScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    connect?: UserWhereUniqueInput
  }

  export type NewsletterCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<NewsletterCreateWithoutFeedbacksInput, NewsletterUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: NewsletterCreateOrConnectWithoutFeedbacksInput
    connect?: NewsletterWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    upsert?: UserUpsertWithoutFeedbacksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbacksInput, UserUpdateWithoutFeedbacksInput>, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type NewsletterUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<NewsletterCreateWithoutFeedbacksInput, NewsletterUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: NewsletterCreateOrConnectWithoutFeedbacksInput
    upsert?: NewsletterUpsertWithoutFeedbacksInput
    connect?: NewsletterWhereUniqueInput
    update?: XOR<XOR<NewsletterUpdateToOneWithWhereWithoutFeedbacksInput, NewsletterUpdateWithoutFeedbacksInput>, NewsletterUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserCreateNestedOneWithoutRetryQueuesInput = {
    create?: XOR<UserCreateWithoutRetryQueuesInput, UserUncheckedCreateWithoutRetryQueuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRetryQueuesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutRetryQueuesNestedInput = {
    create?: XOR<UserCreateWithoutRetryQueuesInput, UserUncheckedCreateWithoutRetryQueuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRetryQueuesInput
    upsert?: UserUpsertWithoutRetryQueuesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRetryQueuesInput, UserUpdateWithoutRetryQueuesInput>, UserUncheckedUpdateWithoutRetryQueuesInput>
  }

  export type UserCreateNestedOneWithoutNewsletterArchivesInput = {
    create?: XOR<UserCreateWithoutNewsletterArchivesInput, UserUncheckedCreateWithoutNewsletterArchivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsletterArchivesInput
    connect?: UserWhereUniqueInput
  }

  export type NewsletterCreateNestedOneWithoutArchivesInput = {
    create?: XOR<NewsletterCreateWithoutArchivesInput, NewsletterUncheckedCreateWithoutArchivesInput>
    connectOrCreate?: NewsletterCreateOrConnectWithoutArchivesInput
    connect?: NewsletterWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNewsletterArchivesNestedInput = {
    create?: XOR<UserCreateWithoutNewsletterArchivesInput, UserUncheckedCreateWithoutNewsletterArchivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsletterArchivesInput
    upsert?: UserUpsertWithoutNewsletterArchivesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsletterArchivesInput, UserUpdateWithoutNewsletterArchivesInput>, UserUncheckedUpdateWithoutNewsletterArchivesInput>
  }

  export type NewsletterUpdateOneRequiredWithoutArchivesNestedInput = {
    create?: XOR<NewsletterCreateWithoutArchivesInput, NewsletterUncheckedCreateWithoutArchivesInput>
    connectOrCreate?: NewsletterCreateOrConnectWithoutArchivesInput
    upsert?: NewsletterUpsertWithoutArchivesInput
    connect?: NewsletterWhereUniqueInput
    update?: XOR<XOR<NewsletterUpdateToOneWithWhereWithoutArchivesInput, NewsletterUpdateWithoutArchivesInput>, NewsletterUncheckedUpdateWithoutArchivesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type OAuthTokenCreateWithoutUserInput = {
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OAuthTokenUncheckedCreateWithoutUserInput = {
    id?: number
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OAuthTokenCreateOrConnectWithoutUserInput = {
    where: OAuthTokenWhereUniqueInput
    create: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput>
  }

  export type OAuthTokenCreateManyUserInputEnvelope = {
    data: OAuthTokenCreateManyUserInput | OAuthTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NewsletterCreateWithoutUserInput = {
    title: string
    content: string
    templateId?: number | null
    frequency?: string
    createdAt?: Date | string
    Feedbacks?: FeedbackCreateNestedManyWithoutNewsletterInput
    Archives?: NewsletterArchiveCreateNestedManyWithoutNewsletterInput
  }

  export type NewsletterUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    templateId?: number | null
    frequency?: string
    createdAt?: Date | string
    Feedbacks?: FeedbackUncheckedCreateNestedManyWithoutNewsletterInput
    Archives?: NewsletterArchiveUncheckedCreateNestedManyWithoutNewsletterInput
  }

  export type NewsletterCreateOrConnectWithoutUserInput = {
    where: NewsletterWhereUniqueInput
    create: XOR<NewsletterCreateWithoutUserInput, NewsletterUncheckedCreateWithoutUserInput>
  }

  export type NewsletterCreateManyUserInputEnvelope = {
    data: NewsletterCreateManyUserInput | NewsletterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutUserInput = {
    rating: number
    comments?: string | null
    createdAt?: Date | string
    newsletter: NewsletterCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutUserInput = {
    id?: number
    newsletterId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackCreateManyUserInputEnvelope = {
    data: FeedbackCreateManyUserInput | FeedbackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RetryQueueCreateWithoutUserInput = {
    email: string
    status?: string
    createdAt?: Date | string
  }

  export type RetryQueueUncheckedCreateWithoutUserInput = {
    id?: number
    email: string
    status?: string
    createdAt?: Date | string
  }

  export type RetryQueueCreateOrConnectWithoutUserInput = {
    where: RetryQueueWhereUniqueInput
    create: XOR<RetryQueueCreateWithoutUserInput, RetryQueueUncheckedCreateWithoutUserInput>
  }

  export type RetryQueueCreateManyUserInputEnvelope = {
    data: RetryQueueCreateManyUserInput | RetryQueueCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NewsletterArchiveCreateWithoutUserInput = {
    sentAt: Date | string
    archiveDate?: Date | string
    newsletter: NewsletterCreateNestedOneWithoutArchivesInput
  }

  export type NewsletterArchiveUncheckedCreateWithoutUserInput = {
    id?: number
    newsletterId: number
    sentAt: Date | string
    archiveDate?: Date | string
  }

  export type NewsletterArchiveCreateOrConnectWithoutUserInput = {
    where: NewsletterArchiveWhereUniqueInput
    create: XOR<NewsletterArchiveCreateWithoutUserInput, NewsletterArchiveUncheckedCreateWithoutUserInput>
  }

  export type NewsletterArchiveCreateManyUserInputEnvelope = {
    data: NewsletterArchiveCreateManyUserInput | NewsletterArchiveCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OAuthTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: OAuthTokenWhereUniqueInput
    update: XOR<OAuthTokenUpdateWithoutUserInput, OAuthTokenUncheckedUpdateWithoutUserInput>
    create: XOR<OAuthTokenCreateWithoutUserInput, OAuthTokenUncheckedCreateWithoutUserInput>
  }

  export type OAuthTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: OAuthTokenWhereUniqueInput
    data: XOR<OAuthTokenUpdateWithoutUserInput, OAuthTokenUncheckedUpdateWithoutUserInput>
  }

  export type OAuthTokenUpdateManyWithWhereWithoutUserInput = {
    where: OAuthTokenScalarWhereInput
    data: XOR<OAuthTokenUpdateManyMutationInput, OAuthTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type OAuthTokenScalarWhereInput = {
    AND?: OAuthTokenScalarWhereInput | OAuthTokenScalarWhereInput[]
    OR?: OAuthTokenScalarWhereInput[]
    NOT?: OAuthTokenScalarWhereInput | OAuthTokenScalarWhereInput[]
    id?: IntFilter<"OAuthToken"> | number
    userId?: IntFilter<"OAuthToken"> | number
    accessToken?: StringFilter<"OAuthToken"> | string
    refreshToken?: StringFilter<"OAuthToken"> | string
    expiresAt?: DateTimeFilter<"OAuthToken"> | Date | string
    createdAt?: DateTimeFilter<"OAuthToken"> | Date | string
  }

  export type NewsletterUpsertWithWhereUniqueWithoutUserInput = {
    where: NewsletterWhereUniqueInput
    update: XOR<NewsletterUpdateWithoutUserInput, NewsletterUncheckedUpdateWithoutUserInput>
    create: XOR<NewsletterCreateWithoutUserInput, NewsletterUncheckedCreateWithoutUserInput>
  }

  export type NewsletterUpdateWithWhereUniqueWithoutUserInput = {
    where: NewsletterWhereUniqueInput
    data: XOR<NewsletterUpdateWithoutUserInput, NewsletterUncheckedUpdateWithoutUserInput>
  }

  export type NewsletterUpdateManyWithWhereWithoutUserInput = {
    where: NewsletterScalarWhereInput
    data: XOR<NewsletterUpdateManyMutationInput, NewsletterUncheckedUpdateManyWithoutUserInput>
  }

  export type NewsletterScalarWhereInput = {
    AND?: NewsletterScalarWhereInput | NewsletterScalarWhereInput[]
    OR?: NewsletterScalarWhereInput[]
    NOT?: NewsletterScalarWhereInput | NewsletterScalarWhereInput[]
    id?: IntFilter<"Newsletter"> | number
    title?: StringFilter<"Newsletter"> | string
    content?: StringFilter<"Newsletter"> | string
    templateId?: IntNullableFilter<"Newsletter"> | number | null
    frequency?: StringFilter<"Newsletter"> | string
    userId?: IntFilter<"Newsletter"> | number
    createdAt?: DateTimeFilter<"Newsletter"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUserInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: IntFilter<"Feedback"> | number
    userId?: IntFilter<"Feedback"> | number
    newsletterId?: IntFilter<"Feedback"> | number
    rating?: IntFilter<"Feedback"> | number
    comments?: StringNullableFilter<"Feedback"> | string | null
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type RetryQueueUpsertWithWhereUniqueWithoutUserInput = {
    where: RetryQueueWhereUniqueInput
    update: XOR<RetryQueueUpdateWithoutUserInput, RetryQueueUncheckedUpdateWithoutUserInput>
    create: XOR<RetryQueueCreateWithoutUserInput, RetryQueueUncheckedCreateWithoutUserInput>
  }

  export type RetryQueueUpdateWithWhereUniqueWithoutUserInput = {
    where: RetryQueueWhereUniqueInput
    data: XOR<RetryQueueUpdateWithoutUserInput, RetryQueueUncheckedUpdateWithoutUserInput>
  }

  export type RetryQueueUpdateManyWithWhereWithoutUserInput = {
    where: RetryQueueScalarWhereInput
    data: XOR<RetryQueueUpdateManyMutationInput, RetryQueueUncheckedUpdateManyWithoutUserInput>
  }

  export type RetryQueueScalarWhereInput = {
    AND?: RetryQueueScalarWhereInput | RetryQueueScalarWhereInput[]
    OR?: RetryQueueScalarWhereInput[]
    NOT?: RetryQueueScalarWhereInput | RetryQueueScalarWhereInput[]
    id?: IntFilter<"RetryQueue"> | number
    userId?: IntNullableFilter<"RetryQueue"> | number | null
    email?: StringFilter<"RetryQueue"> | string
    status?: StringFilter<"RetryQueue"> | string
    createdAt?: DateTimeFilter<"RetryQueue"> | Date | string
  }

  export type NewsletterArchiveUpsertWithWhereUniqueWithoutUserInput = {
    where: NewsletterArchiveWhereUniqueInput
    update: XOR<NewsletterArchiveUpdateWithoutUserInput, NewsletterArchiveUncheckedUpdateWithoutUserInput>
    create: XOR<NewsletterArchiveCreateWithoutUserInput, NewsletterArchiveUncheckedCreateWithoutUserInput>
  }

  export type NewsletterArchiveUpdateWithWhereUniqueWithoutUserInput = {
    where: NewsletterArchiveWhereUniqueInput
    data: XOR<NewsletterArchiveUpdateWithoutUserInput, NewsletterArchiveUncheckedUpdateWithoutUserInput>
  }

  export type NewsletterArchiveUpdateManyWithWhereWithoutUserInput = {
    where: NewsletterArchiveScalarWhereInput
    data: XOR<NewsletterArchiveUpdateManyMutationInput, NewsletterArchiveUncheckedUpdateManyWithoutUserInput>
  }

  export type NewsletterArchiveScalarWhereInput = {
    AND?: NewsletterArchiveScalarWhereInput | NewsletterArchiveScalarWhereInput[]
    OR?: NewsletterArchiveScalarWhereInput[]
    NOT?: NewsletterArchiveScalarWhereInput | NewsletterArchiveScalarWhereInput[]
    id?: IntFilter<"NewsletterArchive"> | number
    newsletterId?: IntFilter<"NewsletterArchive"> | number
    userId?: IntFilter<"NewsletterArchive"> | number
    sentAt?: DateTimeFilter<"NewsletterArchive"> | Date | string
    archiveDate?: DateTimeFilter<"NewsletterArchive"> | Date | string
  }

  export type UserCreateWithoutOAuthTokensInput = {
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Newsletters?: NewsletterCreateNestedManyWithoutUserInput
    Feedbacks?: FeedbackCreateNestedManyWithoutUserInput
    RetryQueues?: RetryQueueCreateNestedManyWithoutUserInput
    NewsletterArchives?: NewsletterArchiveCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOAuthTokensInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Newsletters?: NewsletterUncheckedCreateNestedManyWithoutUserInput
    Feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    RetryQueues?: RetryQueueUncheckedCreateNestedManyWithoutUserInput
    NewsletterArchives?: NewsletterArchiveUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOAuthTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOAuthTokensInput, UserUncheckedCreateWithoutOAuthTokensInput>
  }

  export type UserUpsertWithoutOAuthTokensInput = {
    update: XOR<UserUpdateWithoutOAuthTokensInput, UserUncheckedUpdateWithoutOAuthTokensInput>
    create: XOR<UserCreateWithoutOAuthTokensInput, UserUncheckedCreateWithoutOAuthTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOAuthTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOAuthTokensInput, UserUncheckedUpdateWithoutOAuthTokensInput>
  }

  export type UserUpdateWithoutOAuthTokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Newsletters?: NewsletterUpdateManyWithoutUserNestedInput
    Feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
    RetryQueues?: RetryQueueUpdateManyWithoutUserNestedInput
    NewsletterArchives?: NewsletterArchiveUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOAuthTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Newsletters?: NewsletterUncheckedUpdateManyWithoutUserNestedInput
    Feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    RetryQueues?: RetryQueueUncheckedUpdateManyWithoutUserNestedInput
    NewsletterArchives?: NewsletterArchiveUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNewslettersInput = {
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    OAuthTokens?: OAuthTokenCreateNestedManyWithoutUserInput
    Feedbacks?: FeedbackCreateNestedManyWithoutUserInput
    RetryQueues?: RetryQueueCreateNestedManyWithoutUserInput
    NewsletterArchives?: NewsletterArchiveCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewslettersInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    OAuthTokens?: OAuthTokenUncheckedCreateNestedManyWithoutUserInput
    Feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    RetryQueues?: RetryQueueUncheckedCreateNestedManyWithoutUserInput
    NewsletterArchives?: NewsletterArchiveUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewslettersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewslettersInput, UserUncheckedCreateWithoutNewslettersInput>
  }

  export type FeedbackCreateWithoutNewsletterInput = {
    rating: number
    comments?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutNewsletterInput = {
    id?: number
    userId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutNewsletterInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutNewsletterInput, FeedbackUncheckedCreateWithoutNewsletterInput>
  }

  export type FeedbackCreateManyNewsletterInputEnvelope = {
    data: FeedbackCreateManyNewsletterInput | FeedbackCreateManyNewsletterInput[]
    skipDuplicates?: boolean
  }

  export type NewsletterArchiveCreateWithoutNewsletterInput = {
    sentAt: Date | string
    archiveDate?: Date | string
    user: UserCreateNestedOneWithoutNewsletterArchivesInput
  }

  export type NewsletterArchiveUncheckedCreateWithoutNewsletterInput = {
    id?: number
    userId: number
    sentAt: Date | string
    archiveDate?: Date | string
  }

  export type NewsletterArchiveCreateOrConnectWithoutNewsletterInput = {
    where: NewsletterArchiveWhereUniqueInput
    create: XOR<NewsletterArchiveCreateWithoutNewsletterInput, NewsletterArchiveUncheckedCreateWithoutNewsletterInput>
  }

  export type NewsletterArchiveCreateManyNewsletterInputEnvelope = {
    data: NewsletterArchiveCreateManyNewsletterInput | NewsletterArchiveCreateManyNewsletterInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNewslettersInput = {
    update: XOR<UserUpdateWithoutNewslettersInput, UserUncheckedUpdateWithoutNewslettersInput>
    create: XOR<UserCreateWithoutNewslettersInput, UserUncheckedCreateWithoutNewslettersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewslettersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewslettersInput, UserUncheckedUpdateWithoutNewslettersInput>
  }

  export type UserUpdateWithoutNewslettersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OAuthTokens?: OAuthTokenUpdateManyWithoutUserNestedInput
    Feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
    RetryQueues?: RetryQueueUpdateManyWithoutUserNestedInput
    NewsletterArchives?: NewsletterArchiveUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewslettersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OAuthTokens?: OAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    Feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    RetryQueues?: RetryQueueUncheckedUpdateManyWithoutUserNestedInput
    NewsletterArchives?: NewsletterArchiveUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FeedbackUpsertWithWhereUniqueWithoutNewsletterInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutNewsletterInput, FeedbackUncheckedUpdateWithoutNewsletterInput>
    create: XOR<FeedbackCreateWithoutNewsletterInput, FeedbackUncheckedCreateWithoutNewsletterInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutNewsletterInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutNewsletterInput, FeedbackUncheckedUpdateWithoutNewsletterInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutNewsletterInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutNewsletterInput>
  }

  export type NewsletterArchiveUpsertWithWhereUniqueWithoutNewsletterInput = {
    where: NewsletterArchiveWhereUniqueInput
    update: XOR<NewsletterArchiveUpdateWithoutNewsletterInput, NewsletterArchiveUncheckedUpdateWithoutNewsletterInput>
    create: XOR<NewsletterArchiveCreateWithoutNewsletterInput, NewsletterArchiveUncheckedCreateWithoutNewsletterInput>
  }

  export type NewsletterArchiveUpdateWithWhereUniqueWithoutNewsletterInput = {
    where: NewsletterArchiveWhereUniqueInput
    data: XOR<NewsletterArchiveUpdateWithoutNewsletterInput, NewsletterArchiveUncheckedUpdateWithoutNewsletterInput>
  }

  export type NewsletterArchiveUpdateManyWithWhereWithoutNewsletterInput = {
    where: NewsletterArchiveScalarWhereInput
    data: XOR<NewsletterArchiveUpdateManyMutationInput, NewsletterArchiveUncheckedUpdateManyWithoutNewsletterInput>
  }

  export type UserCreateWithoutFeedbacksInput = {
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    OAuthTokens?: OAuthTokenCreateNestedManyWithoutUserInput
    Newsletters?: NewsletterCreateNestedManyWithoutUserInput
    RetryQueues?: RetryQueueCreateNestedManyWithoutUserInput
    NewsletterArchives?: NewsletterArchiveCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    OAuthTokens?: OAuthTokenUncheckedCreateNestedManyWithoutUserInput
    Newsletters?: NewsletterUncheckedCreateNestedManyWithoutUserInput
    RetryQueues?: RetryQueueUncheckedCreateNestedManyWithoutUserInput
    NewsletterArchives?: NewsletterArchiveUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbacksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
  }

  export type NewsletterCreateWithoutFeedbacksInput = {
    title: string
    content: string
    templateId?: number | null
    frequency?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNewslettersInput
    Archives?: NewsletterArchiveCreateNestedManyWithoutNewsletterInput
  }

  export type NewsletterUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    title: string
    content: string
    templateId?: number | null
    frequency?: string
    userId: number
    createdAt?: Date | string
    Archives?: NewsletterArchiveUncheckedCreateNestedManyWithoutNewsletterInput
  }

  export type NewsletterCreateOrConnectWithoutFeedbacksInput = {
    where: NewsletterWhereUniqueInput
    create: XOR<NewsletterCreateWithoutFeedbacksInput, NewsletterUncheckedCreateWithoutFeedbacksInput>
  }

  export type UserUpsertWithoutFeedbacksInput = {
    update: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserUpdateWithoutFeedbacksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OAuthTokens?: OAuthTokenUpdateManyWithoutUserNestedInput
    Newsletters?: NewsletterUpdateManyWithoutUserNestedInput
    RetryQueues?: RetryQueueUpdateManyWithoutUserNestedInput
    NewsletterArchives?: NewsletterArchiveUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OAuthTokens?: OAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    Newsletters?: NewsletterUncheckedUpdateManyWithoutUserNestedInput
    RetryQueues?: RetryQueueUncheckedUpdateManyWithoutUserNestedInput
    NewsletterArchives?: NewsletterArchiveUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsletterUpsertWithoutFeedbacksInput = {
    update: XOR<NewsletterUpdateWithoutFeedbacksInput, NewsletterUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<NewsletterCreateWithoutFeedbacksInput, NewsletterUncheckedCreateWithoutFeedbacksInput>
    where?: NewsletterWhereInput
  }

  export type NewsletterUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: NewsletterWhereInput
    data: XOR<NewsletterUpdateWithoutFeedbacksInput, NewsletterUncheckedUpdateWithoutFeedbacksInput>
  }

  export type NewsletterUpdateWithoutFeedbacksInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    frequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNewslettersNestedInput
    Archives?: NewsletterArchiveUpdateManyWithoutNewsletterNestedInput
  }

  export type NewsletterUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    frequency?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Archives?: NewsletterArchiveUncheckedUpdateManyWithoutNewsletterNestedInput
  }

  export type UserCreateWithoutRetryQueuesInput = {
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    OAuthTokens?: OAuthTokenCreateNestedManyWithoutUserInput
    Newsletters?: NewsletterCreateNestedManyWithoutUserInput
    Feedbacks?: FeedbackCreateNestedManyWithoutUserInput
    NewsletterArchives?: NewsletterArchiveCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRetryQueuesInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    OAuthTokens?: OAuthTokenUncheckedCreateNestedManyWithoutUserInput
    Newsletters?: NewsletterUncheckedCreateNestedManyWithoutUserInput
    Feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    NewsletterArchives?: NewsletterArchiveUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRetryQueuesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRetryQueuesInput, UserUncheckedCreateWithoutRetryQueuesInput>
  }

  export type UserUpsertWithoutRetryQueuesInput = {
    update: XOR<UserUpdateWithoutRetryQueuesInput, UserUncheckedUpdateWithoutRetryQueuesInput>
    create: XOR<UserCreateWithoutRetryQueuesInput, UserUncheckedCreateWithoutRetryQueuesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRetryQueuesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRetryQueuesInput, UserUncheckedUpdateWithoutRetryQueuesInput>
  }

  export type UserUpdateWithoutRetryQueuesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OAuthTokens?: OAuthTokenUpdateManyWithoutUserNestedInput
    Newsletters?: NewsletterUpdateManyWithoutUserNestedInput
    Feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
    NewsletterArchives?: NewsletterArchiveUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRetryQueuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OAuthTokens?: OAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    Newsletters?: NewsletterUncheckedUpdateManyWithoutUserNestedInput
    Feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    NewsletterArchives?: NewsletterArchiveUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNewsletterArchivesInput = {
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    OAuthTokens?: OAuthTokenCreateNestedManyWithoutUserInput
    Newsletters?: NewsletterCreateNestedManyWithoutUserInput
    Feedbacks?: FeedbackCreateNestedManyWithoutUserInput
    RetryQueues?: RetryQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsletterArchivesInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImg?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: string
    role?: string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    OAuthTokens?: OAuthTokenUncheckedCreateNestedManyWithoutUserInput
    Newsletters?: NewsletterUncheckedCreateNestedManyWithoutUserInput
    Feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    RetryQueues?: RetryQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsletterArchivesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsletterArchivesInput, UserUncheckedCreateWithoutNewsletterArchivesInput>
  }

  export type NewsletterCreateWithoutArchivesInput = {
    title: string
    content: string
    templateId?: number | null
    frequency?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNewslettersInput
    Feedbacks?: FeedbackCreateNestedManyWithoutNewsletterInput
  }

  export type NewsletterUncheckedCreateWithoutArchivesInput = {
    id?: number
    title: string
    content: string
    templateId?: number | null
    frequency?: string
    userId: number
    createdAt?: Date | string
    Feedbacks?: FeedbackUncheckedCreateNestedManyWithoutNewsletterInput
  }

  export type NewsletterCreateOrConnectWithoutArchivesInput = {
    where: NewsletterWhereUniqueInput
    create: XOR<NewsletterCreateWithoutArchivesInput, NewsletterUncheckedCreateWithoutArchivesInput>
  }

  export type UserUpsertWithoutNewsletterArchivesInput = {
    update: XOR<UserUpdateWithoutNewsletterArchivesInput, UserUncheckedUpdateWithoutNewsletterArchivesInput>
    create: XOR<UserCreateWithoutNewsletterArchivesInput, UserUncheckedCreateWithoutNewsletterArchivesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsletterArchivesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsletterArchivesInput, UserUncheckedUpdateWithoutNewsletterArchivesInput>
  }

  export type UserUpdateWithoutNewsletterArchivesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OAuthTokens?: OAuthTokenUpdateManyWithoutUserNestedInput
    Newsletters?: NewsletterUpdateManyWithoutUserNestedInput
    Feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
    RetryQueues?: RetryQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsletterArchivesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    timezone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OAuthTokens?: OAuthTokenUncheckedUpdateManyWithoutUserNestedInput
    Newsletters?: NewsletterUncheckedUpdateManyWithoutUserNestedInput
    Feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    RetryQueues?: RetryQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsletterUpsertWithoutArchivesInput = {
    update: XOR<NewsletterUpdateWithoutArchivesInput, NewsletterUncheckedUpdateWithoutArchivesInput>
    create: XOR<NewsletterCreateWithoutArchivesInput, NewsletterUncheckedCreateWithoutArchivesInput>
    where?: NewsletterWhereInput
  }

  export type NewsletterUpdateToOneWithWhereWithoutArchivesInput = {
    where?: NewsletterWhereInput
    data: XOR<NewsletterUpdateWithoutArchivesInput, NewsletterUncheckedUpdateWithoutArchivesInput>
  }

  export type NewsletterUpdateWithoutArchivesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    frequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNewslettersNestedInput
    Feedbacks?: FeedbackUpdateManyWithoutNewsletterNestedInput
  }

  export type NewsletterUncheckedUpdateWithoutArchivesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    frequency?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Feedbacks?: FeedbackUncheckedUpdateManyWithoutNewsletterNestedInput
  }

  export type OAuthTokenCreateManyUserInput = {
    id?: number
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type NewsletterCreateManyUserInput = {
    id?: number
    title: string
    content: string
    templateId?: number | null
    frequency?: string
    createdAt?: Date | string
  }

  export type FeedbackCreateManyUserInput = {
    id?: number
    newsletterId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
  }

  export type RetryQueueCreateManyUserInput = {
    id?: number
    email: string
    status?: string
    createdAt?: Date | string
  }

  export type NewsletterArchiveCreateManyUserInput = {
    id?: number
    newsletterId: number
    sentAt: Date | string
    archiveDate?: Date | string
  }

  export type OAuthTokenUpdateWithoutUserInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    frequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Feedbacks?: FeedbackUpdateManyWithoutNewsletterNestedInput
    Archives?: NewsletterArchiveUpdateManyWithoutNewsletterNestedInput
  }

  export type NewsletterUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    frequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Feedbacks?: FeedbackUncheckedUpdateManyWithoutNewsletterNestedInput
    Archives?: NewsletterArchiveUncheckedUpdateManyWithoutNewsletterNestedInput
  }

  export type NewsletterUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    frequency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsletter?: NewsletterUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    newsletterId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    newsletterId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetryQueueUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetryQueueUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetryQueueUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterArchiveUpdateWithoutUserInput = {
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newsletter?: NewsletterUpdateOneRequiredWithoutArchivesNestedInput
  }

  export type NewsletterArchiveUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    newsletterId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterArchiveUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    newsletterId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyNewsletterInput = {
    id?: number
    userId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
  }

  export type NewsletterArchiveCreateManyNewsletterInput = {
    id?: number
    userId: number
    sentAt: Date | string
    archiveDate?: Date | string
  }

  export type FeedbackUpdateWithoutNewsletterInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutNewsletterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutNewsletterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterArchiveUpdateWithoutNewsletterInput = {
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNewsletterArchivesNestedInput
  }

  export type NewsletterArchiveUncheckedUpdateWithoutNewsletterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterArchiveUncheckedUpdateManyWithoutNewsletterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}