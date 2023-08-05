

export const Outbrain = ({args, widgetId, contentUrl, installationKey}) => {
 
  return (
    <>
   

      <div
        className="OUTBRAIN"
        data-widget-id={widgetId}
        data-ob-contenturl={contentUrl}
        data-ob-installation-key={installationKey}
      />
    </>
  );
};

