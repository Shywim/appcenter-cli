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
 * Class representing a AppRepoPatchRequest.
 */
class AppRepoPatchRequest {
  /**
   * Create a AppRepoPatchRequest.
   * @property {string} [repoUrl] The absolute URL of the repository
   * @property {uuid} [userId] The unique id (UUID) of the user
   * @property {string} [externalUserId] The external user id from the provider
   * @property {uuid} [serviceConnectionId] The id of the service connection
   * stored in customer credential store
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppRepoPatchRequest
   *
   * @returns {object} metadata of AppRepoPatchRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppRepoPatchRequest',
      type: {
        name: 'Composite',
        className: 'AppRepoPatchRequest',
        modelProperties: {
          repoUrl: {
            required: false,
            serializedName: 'repo_url',
            type: {
              name: 'String'
            }
          },
          userId: {
            required: false,
            serializedName: 'user_id',
            type: {
              name: 'String'
            }
          },
          externalUserId: {
            required: false,
            serializedName: 'external_user_id',
            type: {
              name: 'String'
            }
          },
          serviceConnectionId: {
            required: false,
            serializedName: 'service_connection_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppRepoPatchRequest;
