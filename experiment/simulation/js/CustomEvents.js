

function EventListener()
{
	this.events = [];
}



EventListener.prototype.addListener = function(kind, scope, func)
{
	if (this.events[kind] === undefined)
	{
		this.events[kind] = [];
	}
	var i;
	var scopeFunctions = null;
	for (i = 0; i < this.events[kind].length; i++)
	{
		if (this.events[kind][i].scope == scope)
		{
			scopeFunctions = this.events[kind][i];
			break;
		}
	}
	if (scopeFunctions === null)
	{
		this.events[kind].push({scope:scope, functions:[] });
		scopeFunctions = this.events[kind][this.events[kind].length - 1];
	}
	for (i = 0; i < scopeFunctions.functions.length; i++)
	{
		if (scopeFunctions.functions[i] == func)
		{
			return;
		}
	}
	scopeFunctions.functions.push(func);
}

EventListener.prototype.fireEvent = function(kind, event)
{
	if (this.events[kind] !== undefined)
	{
		for (var i = 0; i < this.events[kind].length; i++)
		{
			var objects = this.events[kind][i];
			var functs = objects.functions;
			var scope = objects.scope
			for (var j = 0; j <functs.length; j++)
			{
				var func = functs[j];
				func.call(scope,event);
			}
		}
	}

}

