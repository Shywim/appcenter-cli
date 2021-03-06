/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The response for the testflight metadata check.
 *
 */
class HasTestflightMetadataResponse {
  /**
   * Create a HasTestflightMetadataResponse.
   * @property {boolean} [hasTestflightMetadata] true if the app has the
   * testflight metadata, false otherwise
   */
  constructor() {
  }

  /**
   * Defines the metadata of HasTestflightMetadataResponse
   *
   * @returns {object} metadata of HasTestflightMetadataResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HasTestflightMetadataResponse',
      type: {
        name: 'Composite',
        className: 'HasTestflightMetadataResponse',
        modelProperties: {
          hasTestflightMetadata: {
            required: false,
            serializedName: 'has_testflight_metadata',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = HasTestflightMetadataResponse;
