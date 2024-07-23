/**
 * Pinterest REST API
 * Pinterest\'s REST API
 *
 * The version of the OpenAPI document: 5.13.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { QuizPinQuestion } from './quizPinQuestion';
import { QuizPinResult } from './quizPinResult';


/**
 * This field includes all quiz data including questions, options, and results.
 */
export interface QuizPinData { 
    questions?: Array<QuizPinQuestion>;
    results?: Array<QuizPinResult>;
}
