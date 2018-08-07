/**
 * Provides a 'device' interface abstraction used to provide define
 * the metadata needed for a field when in the context of a form.
 */
export interface FieldDefinition{
	key			: string
	,type		: string
	,label		: string
	,isId		: boolean
	,required	: boolean
}