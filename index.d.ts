// Type definitions for gulp-bump
// Project: https://github.com/stevelacy/gulp-bump
// Definitions by: Paul Ryan <https://github.com/paullryan>

declare module "gulp-bump" {
  import * as through2 from 'through2';

  namespace bump {
    interface Bump {
      (options?: Option): any;
      task(options?: Option): () => any;
    }
    interface Option {
      /**
       * MAJOR ("major") version when you make incompatible API changes
       * MINOR ("minor") version when you add functionality in a backwards-compatible manner
       * PATCH ("patch") version when you make backwards-compatible bug fixes. (default)
       * PRERELEASE ("prerelease") a pre-release version
       */
      type?: string,

      /**
       * Semver (see http://semver.org/)
       *
       */
      version?: string,

      /**
       * Define the key for versioning off of, from input src in gulp pipeline
       */
      key?: string,

      /**
       * Quiet output
       */
      quiet?: boolean
    }
  }
  var bump: bump.Bump
  export = bump;
}
